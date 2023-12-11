import React from 'react';
import {
  PackageWrapper,
  ItemContainer,
  DetailContainer,
  OuterBorder,
  InnerBorder,
} from './style.css';
import Image from 'next/image';
import { PACKAGE_SIZE } from '../_asset/constants/page';
import Link from 'next/link';

type ImageProps = {
  videoId: string;
  imgSrc: string;
  title: string;
};

function Carousel({ videoId, imgSrc, title }: ImageProps) {
  return (
    <div className={PackageWrapper}>
      <div className={OuterBorder}>
        <div className={InnerBorder}>
          <Link
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
          >
            <div className={ItemContainer}>
              <Image
                src={imgSrc}
                width={PACKAGE_SIZE.MEDIUM.width}
                height={PACKAGE_SIZE.MEDIUM.height}
                alt="video"
              />
              <div className={DetailContainer}>
                <span>{title}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
