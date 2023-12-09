import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Link from 'next/link';
import Provider from '../components/provider';

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
        <Provider>
          <Link href="./carousel">Link</Link>
          {children}
        </Provider>
      </body>
    </html>
  );
}
