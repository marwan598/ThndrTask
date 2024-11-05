import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

type stockCardProps = {
  ticker: String;
  name: String;
};
function StockCard({ticker, name}: stockCardProps): React.JSX.Element {
  return (
    <View style={styles.card}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>
          {ticker.length > 1 ? ticker[0] + ticker[1] : ticker[0]}
        </Text>
      </View>

      <Text numberOfLines={1} style={styles.ticker}>
        {ticker}
      </Text>
      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 160,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#1E2136',
    borderRadius: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#87889074',
    borderWidth: 1,
    borderRadius: 10,
  },
  logoText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    color: '#c6c6cc',
  },
  ticker: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    marginBottom: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    color: '#727481',
    width: '80%',
  },
});

export default StockCard;
