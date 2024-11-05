import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function Header(): React.JSX.Element {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../../assets/images/Logo.png')}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    height: 56,
    backgroundColor: '#121323',
    alignItems: 'flex-start',
  },
  logo: {
    flex: 1,
    width: 170,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
export default Header;
