export type StackParamList = {
  Splash: undefined;
  GetStarted: undefined;
  Onboarding: undefined;
  Paywall: undefined;
  Tabs: undefined;
  NotFound: undefined;
};

export type TabParamList = {
  Home: undefined;
  Diagnose: undefined;
  'My Garden': undefined;
  Profile: undefined;
  Scan: undefined;
};

export type RootStackParamList = {
  Onboarding: undefined;
  Paywall: undefined;
  Home: undefined;
  Tabs: undefined;
  NotFound: undefined;
};

export type OnboardingScreenNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
};
