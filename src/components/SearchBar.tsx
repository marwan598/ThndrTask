import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import debounce from '../utils/debounce';

type SearchBarProps = {
  onChange: (e: string) => void;
};

function SearchBar({onChange}: SearchBarProps): React.JSX.Element {
  const debouncedSearch = debounce(onChange, 500);

  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search for stocks"
      placeholderTextColor="#878890B0"
      onChange={e => debouncedSearch(e.nativeEvent.text)}
    />
  );
}

const styles = StyleSheet.create({
  searchBar: {
    width: 340,
    height: 45,
    marginTop: 15,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderColor: '#87889045',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: '#1E2136',
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
});
export default SearchBar;
