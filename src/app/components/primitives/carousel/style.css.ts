import { style } from '@vanilla-extract/css';

export const PackageWrapper = style({
  width: 320 + 13,
  height: 180 + 53,
  margin: '4px',
  transition: 'all 0.5s ease',
  ':hover': {
    transform: 'scale(1.2)',
    zIndex: 99,
  },
});

export const OuterBorder = style({
  border: '4px solid yellow',
  borderRadius: '20px',
  backgroundColor: 'black',
});

export const InnerBorder = style({
  border: '4px solid black',
  borderRadius: '14px',
});

export const ItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',
});

export const DetailContainer = style({
  minHeight: 42,
  backgroundColor: 'black',
});
