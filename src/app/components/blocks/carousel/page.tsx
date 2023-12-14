'use client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import Carousel from '../../primitives/carousel/page';
import { GET } from '../../../api/route';
import { CarouselPackage, CarouselWrapper } from './style.css';
import { useEffect } from 'react';

//TODO: Featureで呼ばれる時に使う
type CarouselBlockProps = {
  title: string;
  videoId: string;
  url: string;
};

function CarouselBlock() {
  const { data, error } = useSuspenseQuery<GetYoutubeType>({
    queryKey: ['get'],
    queryFn: GET,
  });

  if (error) {
    throw error;
  }

  return (
    <div className={CarouselWrapper}>
      <div className={CarouselPackage}>
        {data.items.map((data, i) => {
          const item = data.snippet;
          return (
            <Carousel
              key={i}
              title={item.title}
              videoId={item.resourceId.videoId}
              imgSrc={item.thumbnails.medium.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CarouselBlock;
