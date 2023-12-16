import { ColorSchemeScript, Container } from '@mantine/core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@mantine/core/styles.css';
import '@/styles/global.css';
import { Header } from '@/components/header';

import { Provider } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Github Repositories',
  description: 'Github Repositories',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <head>
      <ColorSchemeScript />
    </head>
    <body className={inter.className}>
      <Provider>
        <Header />
        <Container fluid pt='md' size='md'>
          {children}
        </Container>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
