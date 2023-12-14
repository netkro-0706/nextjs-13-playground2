'use client';
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from '@tanstack/react-query';
import React from 'react';

export default function TanstackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>{children}</QueryErrorResetBoundary>
    </QueryClientProvider>
  );
}
