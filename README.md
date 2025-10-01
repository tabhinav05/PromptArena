# PrompArena

Compare responses from OpenAI and Anthropic side-by-side in real-time.

## Live Demo

- **Frontend**: https://prompt-arena-5x3rdq2xp-tabhinav6s-projects.vercel.app/
- **Backend**: https://promptarena-backend.onrender.com/

## What it does

Send a prompt to both GPT-4o-mini and Claude Haiku at the same time, and watch their responses appear live. Simple comparison tool to see how different AI models respond to the same question.

## Tech Stack

- **Backend**: NestJS with OpenAI and Anthropic SDKs
- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS

## Getting Started

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:
```
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here
PORT=4000
```

Start the server:
```bash
npm run start:dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

That's it! Open http://localhost:3000 in your browser.

## How to Use

1. Type your question in the input box
2. Hit Enter or click "Start Comparison"
3. Watch both AIs respond in real-time



## Getting API Keys

- **OpenAI**: Sign up at platform.openai.com and create an API key
- **Anthropic**: Sign up at console.anthropic.com and create an API key


## Notes

- This is a demo project, not production-ready
- No database - responses aren't saved
- Both models stream responses at the same time
- Works best on desktop browsers

---