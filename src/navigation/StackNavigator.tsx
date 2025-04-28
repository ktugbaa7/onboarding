import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStartedScreen from '../screens/GetStartedScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import PaywallScreen from '../screens/PaywallScreen';
import SplashScreen from '../screens/SplashScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import TabsNavigator from './TabNavigator';
import {StackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<StackParamList>();
const StackNavigator = () => {
  const onboardingCompleted = useSelector(
    (state: RootState) => state.onboarding.completed,
  );
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      {!onboardingCompleted ? (
        <>
          <Stack.Screen name="GetStarted" component={GetStartedScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Paywall" component={PaywallScreen} />
        </>
      ) : (
        <Stack.Screen name="Tabs" component={TabsNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
