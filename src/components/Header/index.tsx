import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

import userImg from '../../assets/debs.jpeg';
import { styles } from './styles';

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.greeting}>
          Olá,
        </Text>
        <Text style={styles.name}>
          Debs
        </Text>
      </View>
      <Image source={userImg} style={styles.avatar}/>
    </SafeAreaView>
  );
}