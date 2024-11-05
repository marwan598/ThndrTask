import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import SearchBar from '../src/components/SearchBar';

const mockedOnChange = jest.fn();
test('SearchBar renders correctly', () => {
  render(<SearchBar onChange={mockedOnChange} />);
});
test('SearchBar Types into Input correctly', () => {
  render(<SearchBar onChange={mockedOnChange} />);
  const inputElement = screen.getByPlaceholderText('Search for stocks');
  expect(inputElement).toBeTruthy();
  fireEvent.changeText(inputElement, 'AAPL');
});
