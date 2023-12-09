import { CarouselPageWrapper } from './style.css';
import CarouselBlock from '@/app/components/block/carousel/page';

function CarouselPage() {
  return (
    <div className={CarouselPageWrapper}>
      <CarouselBlock />
    </div>
  );
}

export default CarouselPage;
