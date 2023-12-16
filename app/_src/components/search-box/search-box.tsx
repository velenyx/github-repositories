'use client';

import { Combobox, Loader, TextInput, useCombobox } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { SearchType, useSearchQuery } from '@/gql';
import { CLIENT_PATHS } from '@/shared/constants';

import { SearchBoxItem } from './search-box-item';

export const SearchBox = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const searchQuery = useSearchQuery({
    variables: {
      first: 10,
      query: value,
      type: SearchType.User,
    },
  });

  const optionsData =
    searchQuery.data?.search.edges?.filter(
      ({ node }) => node && node.__typename === 'User' && !!node.login
    ) ?? [];

  const options = optionsData.map(({ node }) => {
    if (node && node.__typename === 'User') {
      return <SearchBoxItem {...node} value={node.login} />;
    }

    return null;
  });

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={optionValue => {
        setValue(optionValue);
        router.push(CLIENT_PATHS.PROFILE(optionValue));
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <TextInput
          leftSection={<IconSearch />}
          placeholder='Your email'
          rightSection={searchQuery.loading && <Loader size={18} />}
          value={value}
          w='25ch'
          onBlur={() => combobox.closeDropdown()}
          onClick={() => combobox.openDropdown()}
          onChange={event => {
            setValue(event.currentTarget.value);
            combobox.resetSelectedOption();
            combobox.openDropdown();
          }}
          onFocus={() => {
            combobox.openDropdown();
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown hidden={searchQuery.loading}>
        <Combobox.Options>
          {options}
          {searchQuery.data?.search.edges?.length === 0 && (
            <Combobox.Empty>No results found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
