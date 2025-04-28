import React, {useState} from 'react';
import {
  View,
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
import {CustomText} from '../components/Text';

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
  const [selectedOption, setSelectedOption] = useState<string>('year');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate('Tabs')}>
        <CloseIcon />
      </TouchableOpacity>

      <Image
        source={require('../assets/images/Image.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <View style={styles.overlay}>
        <View style={styles.topSection}>
          <CustomText variant="bold" style={styles.title}>
            PlantApp{' '}
            <CustomText variant="light" style={styles.bold}>
              Premium
            </CustomText>
          </CustomText>
          <CustomText variant="light" style={styles.subtitle}>
            Access All Features
          </CustomText>
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
              <CustomText variant="medium" style={styles.featureTitle}>
                {item.title}
              </CustomText>
              <CustomText variant="regular" style={styles.featureDesc}>
                {item.desc}
              </CustomText>
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
                <CustomText variant="semiBold" style={[styles.priceTitle]}>
                  1 Month
                </CustomText>
                <CustomText variant="light" style={[styles.priceDesc]}>
                  $2.99/month, auto renewable
                </CustomText>
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
                  <CustomText variant="semiBold" style={[styles.priceTitle]}>
                    1 Year
                  </CustomText>
                  <CustomText variant="medium" style={styles.saveText}>
                    Save 50%
                  </CustomText>
                </View>
                <CustomText variant="light" style={[styles.priceDesc]}>
                  First 3 days free, then $529,99/year
                </CustomText>
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

        <CustomText variant="light" style={styles.footerText}>
          After the 3-day free trial period you'll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </CustomText>

        <View style={styles.footerRow}>
          <CustomText variant="regular" style={styles.footerLink}>
            Terms • Privacy • Restore
          </CustomText>
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
  },
  bold: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 17,
    color: '#FFFFFFB2',
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
    fontSize: 20,
    marginTop: 14,
  },
  featureDesc: {
    color: '#fff',
    fontSize: 13,
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
    color: '#FFFFFF',
  },
  priceDesc: {
    fontSize: 12,
    color: '#FFFFFF',
    lineHeight: 10,
  },
  saveText: {
    backgroundColor: '#28AF6E',
    color: '#fff',
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
    marginTop: 6,
  },
  footerLink: {
    color: '#B6C9A6',
    fontSize: 11,
    marginHorizontal: 4,
  },
  footerText: {
    color: '#FFFFFF85',
    fontSize: 9,
    textAlign: 'center',
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
