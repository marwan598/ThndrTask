import React from 'react';
import {render} from '@testing-library/react-native';
import StockCard from '../src/components/StockCard';

test('StockCard renders correctly', () => {
  render(<StockCard name="Apple" ticker="AAPL" />);
});
