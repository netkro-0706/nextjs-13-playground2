import Carousel from '@/app/components/primitives/carousel/page';
import { CarouselPageWrapper } from './style.css';

function CarouselPage() {
  return (
    <div className={CarouselPageWrapper}>
      <Carousel />
    </div>
  );
}

export default CarouselPage;
