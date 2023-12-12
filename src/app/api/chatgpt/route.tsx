import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(age: string, gender: string, duration: string) {
  const openai = new OpenAI({
    apiKey: 'here goes the apikey',
  });

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `Dame un json para un objeto con la siguiente estructura:

        {
        "title":
        "story":
        }
        
        Quiero que crees una historia inventada, esta historia debe ser de género ${gender}, debe durar aproximadamente ${duration} segundos y es para contársela a un niño de ${age} años.
        
        En el campo title del JSON, debes introducir un título para la historia, y en el campo story debes introducir la historia que crees.
        
        Quiero que te ciñas a lo que te he pedido, no quiero que me hables tu, no me digas aqui tienes el json ni nada, solo dame lo que te he pedido.`,
      },
    ],
    temperature: 0.9,
    max_tokens: 600,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return NextResponse.json(response.choices[0].message.content);
}
