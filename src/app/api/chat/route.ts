import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Отправляем запрос к OpenAI ChatGPT API с использованием токена из .env (OPENAI_API_KEY)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "user", content: message }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', errorText);
      return NextResponse.json({ reply: 'OpenAI API error' }, { status: 500 });
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || "No response from API.";

    return NextResponse.json({ reply: assistantMessage });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ reply: 'Internal Server Error' }, { status: 500 });
  }
}
