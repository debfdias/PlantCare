import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { styles } from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour?: string;
  }
}

export function PlantCard({ data, ...rest }: PlantProps) {
  return (
    <GestureHandlerRootView>
      <RectButton  style={styles.wrapper} {...rest}>
        <SvgFromUri 
          uri={data.photo}
          width={50}
          height={50}
        />
        <Text style={styles.title}>
          {data.name}
        </Text>
        <View style={styles.details}>
          <Text style={styles.timeLabel}>
            Watering at
          </Text>
          <Text style={styles.time}>
            {data.hour}
          </Text>
        </View>
      </RectButton>
    </GestureHandlerRootView>
    
  );
}