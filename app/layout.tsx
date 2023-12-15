import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@mantine/core/styles.css';
import './globals.css';

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
      <MantineProvider>{children}</MantineProvider>
    </body>
  </html>
);

export default RootLayout;
