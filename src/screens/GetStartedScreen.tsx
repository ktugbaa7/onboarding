import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OnboardingScreenNavigationProp} from '../types/navigation';
import PrimaryButton from '../components/PrimaryButton';

interface Props {
  navigation: OnboardingScreenNavigationProp;
}
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const GetStartedScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome to <Text style={styles.bold}>PlantApp</Text>
      </Text>
      <Text style={styles.subtitle}>
        Identify more than 3000+ plants and 88% accuracy.
      </Text>
      <Image
        source={require('../assets/Frame1.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.footer}>
        <PrimaryButton
          title="Get Started"
          onPress={() => navigation.navigate('Onboarding')}
        />
        <Text style={styles.footer}>
          By tapping next, you are agreeing to PlantID{' '}
        </Text>
        <Text style={styles.footerBottom}>
          <Text style={styles.link}>Terms of Use </Text> &{' '}
          <Text style={styles.link}>Privacy Policy</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  image: {
    width: screenWidth * 0.9,
    aspectRatio: 1,
    height: screenHeight * 0.7,
    marginBottom: screenHeight * 0.2,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '400',
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  bold: {
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  footer: {
    fontSize: 12,
    color: 'rgba(89, 113, 101, 0.7)',
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 15,
    paddingTop: 16,
  },
  footerBottom: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  link: {
    textDecorationLine: 'underline',
    color: 'rgba(89, 113, 101, 0.7)',
  },
});
