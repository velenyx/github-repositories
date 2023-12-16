import type { ComboboxOptionProps } from '@mantine/core';
import { Avatar, Box, Combobox, Flex, Text } from '@mantine/core';

interface SearchBoxItemProps extends ComboboxOptionProps {
  avatarUrl: string;
  login: string;
  name?: string;
  status?: {
    emoji?: string;
    message?: string;
  };
}

export const SearchBoxItem: React.FC<SearchBoxItemProps> = ({
  login,
  name,
  id,
  avatarUrl,
  status,
}) => (
  <Combobox.Option key={id} value={login}>
    <Flex align='center' gap='sm'>
      <Avatar src={avatarUrl} />
      <Box>
        <Text>{login}</Text>
        {name && (
          <Text c='dimmed' size='xs'>
            {name} {status && <Box>{status.message}</Box>}
          </Text>
        )}
      </Box>
    </Flex>
  </Combobox.Option>
);
