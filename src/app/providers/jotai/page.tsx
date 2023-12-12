'use client';
import { Provider, createStore } from 'jotai';
import React from 'react';

export default function JotaiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const jotaiStore = createStore();
  return <Provider store={jotaiStore}>{children}</Provider>;
}
