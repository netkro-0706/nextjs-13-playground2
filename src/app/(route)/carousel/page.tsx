import { Suspense, useCallback } from 'react';
import { CarouselPageWrapper } from './style.css';
import CarouselBlock from '@/app/components/blocks/carousel/page';

function CarouselPage() {
  return (
    <div className={CarouselPageWrapper}>
      <Suspense fallback="loading....">
        <CarouselBlock />
      </Suspense>
    </div>
  );
}

export default CarouselPage;
