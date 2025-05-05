# Telegram Userbot with OpenAI Integration

A powerful Telegram userbot that integrates with OpenAI to provide intelligent responses and automated messaging capabilities. Built with TypeScript and the Telegram API.

## Features

- 🤖 Automated message handling and responses
- 🧠 OpenAI integration for intelligent conversations
- 📝 Message templates support
- 📊 Group management capabilities
- 🔄 Automatic chat list updates
- 🔐 Secure authentication handling

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Telegram API credentials (api_id and api_hash)
- OpenAI API key

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd TelegramSpam
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
TELEGRAM_API_ID=your_api_id
TELEGRAM_API_HASH=your_api_hash
OPENAI_API_KEY=your_openai_api_key
```

## Configuration

The bot uses a `config.ts` file for various settings. You can customize:
- Message templates
- Response patterns
- Group management settings
- OpenAI configuration

## Usage

1. Start the development server:
```bash
npm run dev
```

2. Build the project:
```bash
npm run build
```

3. Start the production server:
```bash
npm start
```

## Project Structure

- `src/`
  - `index.ts` - Main entry point
  - `auth.ts` - Authentication handling
  - `config.ts` - Configuration settings
  - `eventHandler.ts` - Event handling logic
  - `fileManage.ts` - File management utilities
  - `messageTemplates.ts` - Message template definitions
  - `sendMessages.ts` - Message sending functionality
  - `updateChatlist.ts` - Chat list management

## Dependencies

- `telegram` - Telegram API client
- `openai` - OpenAI API integration
- `dotenv` - Environment variable management
- `typescript` - TypeScript support
- `nodemon` - Development server with auto-reload

## Security Notes

- Never commit your `.env` file
- Keep your API keys secure
- Follow Telegram's terms of service
- Use the bot responsibly

## License

ISC License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support, please open an issue in the repository. 