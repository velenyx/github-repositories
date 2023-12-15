import { ColorSchemeScript, Container, Flex, Title } from '@mantine/core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@mantine/core/styles.css';
import '@/app/_src/styles/global.css';
import { Provider } from '@/app/provider';
import { SearchBox } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Github Repositories',
  description: 'Github Repositories',
};

const Header = () => (
  <Flex justify='space-between'>
    <Title>⭐ Github Repositories</Title>
    <SearchBox />
  </Flex>
);

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <head>
      <ColorSchemeScript />
    </head>
    <body className={inter.className}>
      <Provider>
        <Container fluid size='md'>
          <Header />
          {children}
        </Container>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
