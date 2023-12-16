import { Flex, Title } from '@mantine/core';

import { SearchBox } from '@/components';

import classes from './header.module.css';

export const Header = () => (
  <Flex align='center' className={classes.header} justify='space-between' px='lg' py='md'>
    <Title order={2}>⭐ Github Repositories</Title>
    <SearchBox />
  </Flex>
);
