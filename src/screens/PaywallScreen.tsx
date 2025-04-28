import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OnboardingScreenNavigationProp} from '../types/navigation';
import PrimaryButton from '../components/PrimaryButton';
import UnlimitedIcon from '../assets/icons/UnlimitedIcon';
import FasterIcon from '../assets/icons/FasterIcon';
import CloseIcon from '../assets/icons/CloseIcon';

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

const features = [
  {title: 'Unlimited', desc: 'Plant Identify', icon: <UnlimitedIcon />},
  {title: 'Faster', desc: 'Process', icon: <FasterIcon />},
  {title: 'Detailed', desc: 'Plant care', icon: <FasterIcon />},
];
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const PaywallScreen: React.FC<Props> = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('year');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate('Tabs')}>
        <CloseIcon />
      </TouchableOpacity>

      <Image
        source={require('../assets/Image.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <View style={styles.overlay}>
        <View style={styles.topSection}>
          <Text style={styles.title}>
            PlantApp <Text style={styles.bold}>Premium</Text>
          </Text>
          <Text style={styles.subtitle}>Access All Features</Text>
        </View>

        <FlatList
          data={features}
          keyExtractor={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuresRow}
          renderItem={({item}) => (
            <View style={styles.featureBox}>
              {item.icon}
              <Text style={styles.featureTitle}>{item.title}</Text>
              <Text style={styles.featureDesc}>{item.desc}</Text>
            </View>
          )}
        />
        <View style={styles.pricingColumn}>
          <TouchableOpacity
            style={[
              styles.priceBox,
              selectedOption === 'month' && styles.priceBoxActive,
            ]}
            onPress={() => setSelectedOption('month')}>
            <View style={styles.row}>
              <View
                style={[
                  styles.radioCircle,
                  selectedOption === 'month' && styles.radioCircleActive,
                ]}
              />
              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.priceTitle,
                    selectedOption === 'month' && styles.priceTitleActive,
                  ]}>
                  1 Month
                </Text>
                <Text
                  style={[
                    styles.priceDesc,
                    selectedOption === 'month' && styles.priceDescActive,
                  ]}>
                  $2.99/month
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.priceBox,
              selectedOption === 'year' && styles.priceBoxActive,
            ]}
            onPress={() => setSelectedOption('year')}>
            <View style={styles.row}>
              <View
                style={[
                  styles.radioCircle,
                  selectedOption === 'year' && styles.radioCircleActive,
                ]}
              />
              <View style={styles.textContainer}>
                <View style={styles.rowBetween}>
                  <Text
                    style={[
                      styles.priceTitle,
                      selectedOption === 'year' && styles.priceTitleActive,
                    ]}>
                    1 Year
                  </Text>
                  <Text style={styles.saveText}>Save 50%</Text>
                </View>
                <Text
                  style={[
                    styles.priceDesc,
                    selectedOption === 'year' && styles.priceDescActive,
                  ]}>
                  3 days free, then $29.99/year
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <PrimaryButton
          title="Try free for 3 days"
          onPress={() => navigation.navigate('Tabs')}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <View>
          <Text style={styles.footerText}>
            After the 3-day free trial period you'll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </Text>
        </View>
        <View style={styles.footerRow}>
          <Text style={styles.footerLink}>Terms</Text>
          <Text style={styles.footerDot}>•</Text>
          <Text style={styles.footerLink}>Privacy</Text>
          <Text style={styles.footerDot}>•</Text>
          <Text style={styles.footerLink}>Restore</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PaywallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101e17',
  },
  backgroundImage: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
    top: Platform.OS === 'android' ? -screenHeight * 0.25 : -screenHeight * 0.2,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === 'android' ? 24 : 0,
    marginTop: screenHeight * 0.3,
  },
  topSection: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  bold: {
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 17,
    color: '#fff',
    marginTop: 8,
    fontWeight: '300',
  },
  featuresRow: {
    marginVertical: 24,
  },
  featureBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 14,
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: 156,
    height: 130,
    marginHorizontal: 6,
  },
  featureTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 20,
    marginTop: 20,
  },
  featureDesc: {
    color: '#fff',
    fontSize: 13,
    marginTop: 4,
    fontWeight: '400',
  },
  pricingColumn: {
    flexDirection: 'column',
    gap: 12,
    marginVertical: 12,
  },
  priceBox: {
    borderWidth: 0.5,
    borderColor: '#FFFFFF4D',
    borderRadius: 14,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  priceBoxActive: {
    borderColor: '#28AF6E',
    backgroundColor: 'rgba(40, 175, 110, 0.24)',
    padding: 9,
    borderWidth: 1.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 0,
    backgroundColor: '#FFFFFF26',
  },
  radioCircleActive: {
    backgroundColor: '#fff',
    borderColor: '#28AF6E',
    borderWidth: 6,
  },
  priceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  priceTitleActive: {
    color: '#FFFFFF',
  },
  priceDesc: {
    fontSize: 14,
    color: '#A1A1AA',
    marginTop: 4,
  },
  priceDescActive: {
    color: '#FFFFFF',
  },
  saveText: {
    backgroundColor: '#28AF6E',
    color: '#fff',
    fontWeight: '500',
    fontSize: 12,
    position: 'absolute',
    right: -10,
    top: -10,
    padding: 6,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 20,
  },
  button: {
    backgroundColor: '#28AF6E',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  footerLink: {
    color: '#B6C9A6',
    fontSize: 12,
    marginHorizontal: 4,
  },
  footerDot: {
    color: '#B6C9A6',
    fontSize: 12,
    marginHorizontal: 2,
  },
  footerText: {
    color: '#FFFFFF85',
    fontSize: 9,
    textAlign: 'center',
    fontWeight: '300',
  },
  closeButton: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 24 : 16,
    right: 24,
    zIndex: 1,
    backgroundColor: '#00000066',
    borderRadius: 100,
  },
});
