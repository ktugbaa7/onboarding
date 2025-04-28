import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OnboardingScreenNavigationProp} from '../types/navigation';
import PrimaryButton from '../components/PrimaryButton';

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

const GetStartedScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.bold}>PlantApp</Text>
        </Text>
        <Text style={styles.subtitle}>Identify more than 3000+ plants and</Text>
        <Text style={styles.subtitle}>88% accuracy.</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Frame1.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.footer}>
        <PrimaryButton
          title="Get Started"
          onPress={() => navigation.navigate('Onboarding')}
        />
        <View style={styles.footerBottom}>
          <Text style={styles.footerText}>
            By tapping next, you are agreeing to PlantID
          </Text>
          <Text style={styles.footerText}>
            <Text style={styles.link}>Terms of Use </Text>&
            <Text style={styles.link}> Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '400',
    marginBottom: 12,
  },
  bold: {
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  footer: {
    alignItems: 'center',
  },
  footerBottom: {
    marginTop: 0,
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#597165B2',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#597165B2',
  },
});
