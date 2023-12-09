'use client';
import { useQuery } from '@tanstack/react-query';
import Carousel from '../../primitives/carousel/page';
import { GET } from '../../../api/route';

function CarouselBlock() {
  const { data } = useQuery({ queryKey: ['get'], queryFn: GET });

  console.log(data);
  return (
    <div>
      <Carousel />
    </div>
  );
}

export default CarouselBlock;
