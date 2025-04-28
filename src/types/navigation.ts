import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParamList = {
  GetStarted: undefined;
  Onboarding: undefined;
  Paywall: undefined;
  Tabs: undefined;
};

export type TabParamList = {
  Home: undefined;
  Diagnose: undefined;
  'My Garden': undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Onboarding: undefined;
  Paywall: undefined;
  Home: undefined;
  Tabs: undefined;
};

export type OnboardingScreenNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
};
