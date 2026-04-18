import { NextResponse } from 'next/server';

/**
 * POST /api/narrate
 *
 * Accepts a text payload and returns it with a language hint.
 * The actual speech synthesis is handled client-side via the Web Speech API
 * (SpeechSynthesis) through the `useNarration` hook.
 *
 * Body: { text: string }
 * Response: { text: string, lang: 'fr' }
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const text: string = body?.text;

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'A non-empty "text" string is required.' },
        { status: 400 },
      );
    }

    // Trim and cap text length to avoid extremely long narrations
    const sanitized = text.trim().slice(0, 5_000);

    if (!sanitized) {
      return NextResponse.json(
        { error: 'Text must not be empty or whitespace-only.' },
        { status: 400 },
      );
    }

    return NextResponse.json({ text: sanitized, lang: 'fr' });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body. Expected JSON with a "text" field.' },
      { status: 400 },
    );
  }
}
