import {
  Inconsolata as FontMono,
  Quando as FontQuando,
  Poppins as FontSans
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700']
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: '400'
});

export const fontQuando = FontQuando({
  subsets: ['latin'],
  variable: '--font-quando',
  weight: '400'
});
