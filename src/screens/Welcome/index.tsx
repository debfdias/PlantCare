import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import wateringImg from '../../assets/watering.png';

import { styles } from './styles';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('userID');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Manage your plants {'\n'}
        in an easy way, {'\n'}
        and any time.
      </Text>

      <Image 
        source={wateringImg}
        style={styles.img}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>
        Don't forget your plants anymore. {'\n'}
        We take care of them for you.
      </Text>

      <TouchableOpacity style={styles.welcomeButton} activeOpacity={0.4} onPress={handleStart}>
        <Text style={styles.textButton}>
          Let's go
        </Text>

        <Feather 
            name="chevron-right"
            style={styles.iconButton}
          />
      </TouchableOpacity>
    </SafeAreaView>
  );
}