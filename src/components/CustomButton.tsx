import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  PressableProps,
  Dimensions,
} from 'react-native';
import {colors} from '../constants';
import {View} from 'react-native';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined' | 'filledBlack' | 'outlinedBlack';
  size?: 'large' | 'medium';
  invalid?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

function CustomButton({
  label,
  variant = 'filled',
  size = 'large',
  invalid = false,
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      disabled={invalid}
      style={({pressed}) => [
        styles.container,
        pressed ? styles[`${variant}Pressed`] : styles[variant],
        invalid && styles.invalid,
      ]}
      {...props}>
      <View style={styles[size]}>
        <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  invalid: {
    opacity: 0.5,
  },
  filled: {
    backgroundColor: colors.YELLOWGREEN,
  },
  filledBlack: {
    backgroundColor: colors.BLACK,
  },
  outlined: {
    borderColor: colors.YELLOWGREEN,
    borderWidth: 1,
  },
  outlinedBlack: {
    borderColor: colors.BLACK,
    borderWidth: 1,
  },
  filledPressed: {
    backgroundColor: colors.YELLOWGREEN_500,
  },
  filledBlackPressed: {
    backgroundColor: colors.GRAY_700,
  },
  outlinedPressed: {
    borderColor: colors.YELLOWGREEN,
    borderWidth: 1,
    opacity: 0.5,
  },
  outlinedBlackPressed: {
    borderColor: colors.BLACK,
    borderWidth: 1,
    opacity: 0.5,
  },
  large: {
    width: '100%',
    paddingVertical: deviceHeight > 700 ? 15 : 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  medium: {
    width: '50%',
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  filledText: {
    color: colors.WHITE,
  },
  filledBlackText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: colors.YELLOWGREEN,
  },
  outlinedBlackText: {
    color: colors.BLACK,
  },
});

export default CustomButton;
