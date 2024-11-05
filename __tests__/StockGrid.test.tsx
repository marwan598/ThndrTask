import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import StocksGrid from '../src/components/StocksGrid';

test('StocksGrid renders correctly', () => {
  render(<StocksGrid />);
});
test('StocksGrid scrolls correctly', () => {
  render(<StocksGrid />);
  const flatListElement = screen.getByTestId('FlatList');
  expect(flatListElement).toBeTruthy();
  fireEvent.scroll(flatListElement, {
    nativeEvent: {
      contentOffset: {y: 100},
      contentSize: {height: 500, width: 300}, // You might need this
      layoutMeasurement: {height: 200, width: 300},
    },
  });
});
