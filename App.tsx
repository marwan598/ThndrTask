import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomStatusBar from './src/components/CustomStatusBar';
import Header from './src/components/Header';
import StocksGrid from './src/components/StocksGrid';

function App(): React.JSX.Element {
  return (
    <View style={styles.screen}>
      <CustomStatusBar backgroundColor="#121323" barStyle="light-content" />
      <Header />
      <StocksGrid />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#191a2b',
  },

  sectionContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191a2b',
  },

  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
