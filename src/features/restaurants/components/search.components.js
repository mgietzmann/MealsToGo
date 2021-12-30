import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { LocationContext } from '../../../services/location/location.context';

const SearchView = styled(View)`
  justify-content: center;
  padding: ${(props) => props.theme.space[3]};
`;

export function Search() {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchView>
      <Searchbar
        placeholder="Search for a place"
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        value={searchKeyword}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
}