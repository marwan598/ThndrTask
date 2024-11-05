import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

type MyStatusBarProps = {
  backgroundColor: string;
  barStyle: 'default' | 'light-content' | 'dark-content';
};

function CustomStatusBar({
  backgroundColor,
  ...props
}: MyStatusBarProps): React.JSX.Element {
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
}
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
export default CustomStatusBar;
