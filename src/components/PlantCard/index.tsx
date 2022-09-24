import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Animated } from 'react-native';
import { RectButton, RectButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';
import { THEME } from '../../theme';

import { styles } from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleDelete: () => void;
}

export function PlantCard({ data, handleDelete, ...rest }: PlantProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <GestureHandlerRootView>
              <RectButton
                style={styles.deletePlant}
                onPress={handleDelete}
              >
                <Feather
                  name="trash"
                  color={THEME.COLORS.white}
                  size={32}
                />
              </RectButton>
            </GestureHandlerRootView>
          </View>
        </Animated.View>
      )}
    >
      <GestureHandlerRootView>
        <RectButton style={styles.wrapper} {...rest}>
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
    </Swipeable>
  );
}