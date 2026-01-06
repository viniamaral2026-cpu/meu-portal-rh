import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

const google = createGoogleGenerativeAI({
  // Nota: A chave de API do Google deve ser configurada na variável de ambiente GOOGLE_API_KEY
  apiKey: process.env.GOOGLE_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('models/gemini-2.5-flash-lite'),
    system: 'Você é um assistente de RH prestativo.',
    messages,
  });

  return result.toAIStreamResponse();
}
