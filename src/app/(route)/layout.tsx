import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Link from 'next/link';
import { NavLink, NavbarWrapper } from './style.css';
import TanstackProvider from '../providers/tanstack/page';
import JotaiProvider from '../providers/jotai/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'nextjs-13-playgound2',
  description: 'my sendbox for code test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <JotaiProvider>
            <div className={NavbarWrapper}>
              <Link className={NavLink} href="/">
                HOME
              </Link>
              <Link className={NavLink} href="./carousel">
                Carousel
              </Link>
            </div>
            {children}
          </JotaiProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
