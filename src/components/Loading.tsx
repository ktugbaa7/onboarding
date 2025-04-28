import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

const {width: screenWidth} = Dimensions.get('window');

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/AnimationLoading.json')}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.5,
  },
});

export default Loading; 