import React from 'react';
import {render} from '@testing-library/react-native';
import CustomStatusBar from '../src/components/CustomStatusBar';

test('CustomStatusBar renders correctly', () => {
  render(
    <CustomStatusBar backgroundColor={'#121323'} barStyle={'light-content'} />,
  );
});
