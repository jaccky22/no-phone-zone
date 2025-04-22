// app/api/advice/route.ts
import { NextResponse } from 'next/server';
import Together from 'together-ai';

export async function POST(req: Request) {
  console.log('👉 POST /api/advice called');
  console.log('🔑 API key present:', !!process.env.TOGETHER_API_KEY);
  const apiKey = process.env.TOGETHER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key missing' }, { status: 500 });
  }

  const { messages } = await req.json();
  console.log('📨 messages:', messages);

  try {
    const together = new Together({ apiKey });
    const result = await together.chat.completions.create({
      messages,
      model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
      max_tokens: 1000,
      temperature: 0.7
    });

    // Adjust this path if your API returns differently
    const reply = result.choices?.[0]?.message?.content ?? '';
    return NextResponse.json({ response: reply });
  } catch (err: any) {
    console.error('Together error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}