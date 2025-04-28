import {View, StyleSheet, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {completeOnboarding} from '../redux/onboardingSlice';
import {OnboardingScreenNavigationProp} from '../types/navigation';
import PrimaryButton from '../components/PrimaryButton';

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const slides = [
  {
    key: 'slide1',
    title: require('../assets/images/Title.png'),
    image: require('../assets/images/Content.png'),
  },
  {
    key: 'slide2',
    title: require('../assets/images/Title2.png'),
    image: require('../assets/images/iphone.png'),
  },
  {
    key: 'slide3',
    title: require('../assets/images/Title.png'),
    image: require('../assets/images/Content.png'),
  },
];

const OnboardingScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      dispatch(completeOnboarding());
      navigation.navigate('Paywall');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={slides[current].title}
        style={styles.imageTitle}
        resizeMode="contain"
      />
      <View style={styles.content}>
        {current === 1 ? (
          <View style={styles.slideContainer}>
            <Image
              source={require('../assets/images/artwork.png')}
              style={styles.artwork}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/images/iphone.png')}
              style={styles.phoneImage}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/images/img.png')}
              style={styles.sticker}
              resizeMode="contain"
              blurRadius={20}
            />
          </View>
        ) : (
          <Image
            source={slides[current].image}
            style={styles.image}
            resizeMode="contain"
          />
        )}
      </View>
      <View style={styles.footer}>
        <PrimaryButton title="Continue" onPress={handleNext} />
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, current === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  imageTitle: {
    width: '100%',
    aspectRatio: 5,
    alignSelf: 'flex-start',
    marginLeft: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'left',
    marginBottom: 24,
  },
  footer: {
    width: '100%',
    paddingTop: 16,
    zIndex: 100,
    flexDirection: 'column',
    alignItems: 'center',
  },
  slideContainer: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.7,
    position: 'relative',
    bottom: -50,
  },
  artwork: {
    position: 'absolute',
    width: 350,
    height: 300,
    top: -70,
    left: 20,
    zIndex: 3,
  },
  phoneImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  sticker: {
    position: 'absolute',
    width: screenWidth * 1,
    height: screenHeight * 0.7,
    top: -80,
    right: -15,
    zIndex: 1,
    transform: [{rotate: '-285deg'}],
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#13231B40',
    marginHorizontal: 5,
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: '#000',
  },
});
