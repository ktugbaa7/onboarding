import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { fonts } from '../styles/fonts';

interface CustomTextProps extends TextProps {
  variant?: keyof typeof fonts;
}

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  variant = 'regular',
  ...props
}) => {
  return (
    <RNText
      style={[styles.text, { fontFamily: fonts[variant] }, style]}
      {...props}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
}); 