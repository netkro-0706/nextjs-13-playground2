'use client';
import { useQuery } from '@tanstack/react-query';
import Carousel from '../../primitives/carousel/page';
import { GET } from '../../../api/route';
import { CarouselPackage, CarouselWrapper } from './style.css';

//TODO: Featureで呼ばれる時に使う
type CarouselBlockProps = {
  title: string;
  videoId: string;
  url: string;
};

function CarouselBlock() {
  const { data, status, error } = useQuery({ queryKey: ['get'], queryFn: GET });
  if (status === 'pending') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  const item = data.items[5].snippet;
  const img = item.thumbnails.medium;
  // console.log('item', item);

  return (
    <div className={CarouselWrapper}>
      <div className={CarouselPackage}>
        <Carousel
          title={item.title}
          videoId={item.resourceId.videoId}
          imgSrc={img.url}
        />
      </div>
    </div>
  );
}

export default CarouselBlock;
