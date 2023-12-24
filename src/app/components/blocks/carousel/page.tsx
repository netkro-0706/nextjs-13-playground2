"use client";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import Carousel from "../../primitives/carousel/page";
import { CarouselPackage, CarouselWrapper } from "./style.css";
import { Suspense, useEffect, useRef, useState } from "react";
import GET from "@/app/api/route";
import { GetYoutubeType } from "@/app/util/hooks/get-api/type";

function CarouselBlock() {
  const { data, error, fetchNextPage, isLoading } =
    useSuspenseInfiniteQuery<GetYoutubeType>({
      queryKey: ["get"],
      queryFn: async ({ pageParam = "" }) => {
        return await GET({
          nextPageToken: pageParam as string,
          pageParam: 0,
        });
      },
      getNextPageParam: ({ nextPageToken, pageInfo }) => {
        return pageInfo.totalResults > pageInfo.resultsPerPage
          ? nextPageToken
          : undefined;
      },
      initialPageParam: 1,
    });

  const nowPage = data.pages.length - 1;

  if (error) {
    throw error;
  }

  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollContainer = ref.current;
    if (scrollContainer) {
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth = scrollContainer.scrollWidth;

      if (scrollLeft + scrollContainer.clientWidth >= scrollWidth) {
        if (
          data &&
          data.pages[nowPage].pageInfo.totalResults >
            data.pages[nowPage].pageInfo.resultsPerPage
        ) {
          //다음페이지가 아닌 현재 페이지가 생성중... 수정
          fetchNextPage();
        }
      }
    }
  };

  useEffect(() => {
    const scrollContainer = ref.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);

      return () => {
        scrollContainer?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [data]);

  return (
    <div className={CarouselWrapper}>
      <div ref={ref} className={CarouselPackage}>
        {data.pages.map((data) => {
          return data.items.map((pageItem, i) => {
            const item = pageItem.snippet;
            return (
              <Carousel
                key={i}
                title={item.title}
                videoId={item.resourceId.videoId}
                imgSrc={item.thumbnails.medium.url}
              />
            );
          });
        })}
      </div>
    </div>
  );
}

export default CarouselBlock;
