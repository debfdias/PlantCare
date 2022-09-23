import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler';

import { styles } from './styles';

interface EnvButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
  
}

export function EnvironmentButton({ title, active = false, ...rest}: EnvButtonProps) {
  return (
    <GestureHandlerRootView>
      <RectButton style={[styles.container, active && styles.containerActive]} {...rest}>
        <Text style={[styles.text, active && styles.textActive]}>
          {title}
        </Text>
      </RectButton>
    </GestureHandlerRootView>
    
  );
}