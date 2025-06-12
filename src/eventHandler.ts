import { client, TelegramClient } from "telegram";
import { updateChatList } from "./updateChatlist";
import OpenAI from "openai";
import { CONFIG, systemPrompt } from "./config";
import { ChatCompletionMessageParam } from "openai/resources/chat";


const openai = new OpenAI({
    apiKey: CONFIG.openai_api
});



export const eventHandler = (client: TelegramClient) => async (event) => {
    try {
        if (event?.message?.className === "MessageService") {
            if (!event?.message?.fromId?.userId?.value) return;
            try {
                let isMe: boolean = (event?.message?.fromId?.userId?.value === ((await client.getMe()).id as any).value);
                if (isMe) await updateChatList(client);
            } catch (error) {
                console.log(error);
            }
        } else {
            const message = event?.message?.message?.toLowerCase() || '';
            const chatId = event?.message?.chatId?.value;
            const messageId = event?.message?.id;

            if (!(message && message.length < 300 && message.length > 20 && chatId && messageId)) return;

            const chat = await client.getEntity(chatId);
            const username = (chat as any)?.username;
            const messageLink = username
                ? `https://t.me/${username}/${messageId}`
                : `https://t.me/c/${Math.abs(chatId).toString().slice(4)}/${messageId}`;
            console.log('Message link:', messageLink);

            const messages: ChatCompletionMessageParam[] = [
                { role: "system", content: systemPrompt },
                { role: "user", content: message }
            ];

            const completion = await openai.chat.completions.create({
                messages,
                model: 'gpt-4o',
                max_tokens: 400
            });

            const botReply = (completion.choices[0].message.content || "").replace(/"/g, "");

            console.log(botReply);

            if (botReply === "no") return;
            try {
                await client.sendMessage("StellaRay777", {
                    message: messageLink
                });
            } catch (error) {
                console.log("Error sending DM me message:", error);
            }
            setTimeout(async () => {
                try {
                    await client.sendMessage(event?.message?.peerId, {
                        message: botReply,
                        replyTo: event?.message?.id
                    });
                } catch (error) {
                    console.log("Error sending DM me message:", error);
                }
            }, 5000);

        }
    } catch (error) {
        console.log(error);
    }
};