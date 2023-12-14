import { style } from '@vanilla-extract/css';

export const CarouselWrapper = style({
  marginTop: '20px',
});

export const CarouselPackage = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  minHeight: 300,
  border: '1px solid blue',
  padding: 0,
  backgroundColor: 'lightblue',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
});
