import { style } from '@vanilla-extract/css';

export const CarouselPackage = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '80px',
  border: '4px solid yellow',
  padding: 10,
  transition: 'all 0.5s ease',
  ':hover': {
    transform: 'scale(1.2)',
  },
});

export const CarouselWrapper = style({
  marginTop: '20px',
});
