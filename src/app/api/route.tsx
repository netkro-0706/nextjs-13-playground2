// import { NextResponse } from 'next/server';

import { QueryFunctionContext } from "@tanstack/react-query";
import { GetYoutubeType } from "../util/hooks/get-api/type";
import next from "next";

const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY as string;
const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems`;

interface Props {
  pageParam: number;
  nextPageToken?: string | undefined;
}

const GET = async (params: Props): Promise<GetYoutubeType> => {
  const nextPage = params.nextPageToken
    ? `&nextPageToken=${encodeURIComponent(params.nextPageToken)}`
    : "";

  const part = "snippet";
  const playlistId = "PLWTycz4el4t7ZCxkGYyekoP1iBxmOM4zZ";
  const maxResults = "10";

  const res = await fetch(
    `${API_URL}?key=${API_KEY}&part=${part}&playlistId=${playlistId}&maxResults=${maxResults}${nextPage}`
  );

  const result = await res.json();
  // console.log("res", result);

  return result;
  // return NextResponse.json(result);
};

export default GET;
