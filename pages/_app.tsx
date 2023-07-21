import AuthGuard from '@/components/AuthGuard';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { NextComponentType } from 'next';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export type CustomAppProps = AppProps<{ session: Session }> & {
  Component: NextComponentType & { requireAuth?: boolean };
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        {Component.requireAuth ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
