import type {Config} from 'jest';

export default async (): Promise<Config> => {
  module.exports = {
    preset: 'react-native',
  };

  return {
    setupFiles: ['./jest/jest-setup.ts'],
    verbose: true,
  };
};
