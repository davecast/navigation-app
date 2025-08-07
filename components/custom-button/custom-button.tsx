import React from 'react';
import { Pressable, type PressableProps, Text } from 'react-native';

interface CustomButtonProps extends PressableProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'text-only' | 'container-only';
}

const CustomButton = ({ children, color = 'primary', variant = 'container-only', ...props }: CustomButtonProps) => {

  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color]

  const textColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  }[color]
  

  const btnVariant = {
    'text-only': 'p-4',
    'container-only': `rounded-full p-4 active:opacity-80 ${btnColor}`,
  }[variant]

  const textVariant = {
    'text-only': `text-center text-lg font-work-medium ${textColor}`,
    'container-only': 'text-white text-center text-lg font-work-medium',
  }[variant]

  return (
    <Pressable 
    {...props}
    className={`${btnVariant}`}
    >
      <Text className={`${textVariant}`}>
        {children}
      </Text>
    </Pressable>
  )
}

export default CustomButton