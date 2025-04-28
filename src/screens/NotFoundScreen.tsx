import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../types/navigation';
import PrimaryButton from '../components/PrimaryButton';
import {CustomText} from '../components/Text';

const NotFoundScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <View style={styles.container}>
      <CustomText variant="bold" style={styles.title}>
        404
      </CustomText>
      <CustomText variant="semiBold" style={styles.subtitle}>
        Sayfa Bulunamadı
      </CustomText>
      <CustomText variant="regular" style={styles.description}>
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </CustomText>
      <PrimaryButton
        title="Ana Sayfaya Dön"
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={() => navigation.navigate('Tabs')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 72,
    color: '#28AF6E',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: '#333333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#28AF6E',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default NotFoundScreen;
