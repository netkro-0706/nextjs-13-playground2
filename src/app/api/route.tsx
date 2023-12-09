import { NextResponse } from 'next/server';

const API_KEY: string = process.env.YOUTUBE_API_KEY as string;
const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems`;

export async function GET() {
  const part = 'snippet';
  const playlistId = 'PLWTycz4el4t7ZCxkGYyekoP1iBxmOM4zZ';
  const maxResults = '30';

  const res = await fetch(
    `${API_URL}?key=${API_KEY}&part=${part}&playlistId=${playlistId}&maxResults=${maxResults}`
  );

  const result = await res.json();

  return NextResponse.json(result);
}
