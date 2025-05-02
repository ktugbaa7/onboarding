import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../types/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const {width: screenWidth} = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const onboardingCompleted = useSelector(
    (state: RootState) => state.onboarding.completed,
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onboardingCompleted) {
        navigation.replace('Tabs');
      } else {
        navigation.replace('GetStarted');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, onboardingCompleted]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/AnimationSplash.json')}
        autoPlay
        loop={false}
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
    backgroundColor: '#FFFFFF',
  },
  animation: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.5,
  },
});

export default SplashScreen; 