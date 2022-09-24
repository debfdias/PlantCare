import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

import userImg from '../../assets/debs.jpeg';
import { styles } from './styles';

export function Header() {
  const [userName, setUserName ] = useState<string>();

  async function loadStogageData() {
    const user = await AsyncStorage.getItem('@plantcare:user');
    setUserName(user!);
  }

  useEffect(() => {
    loadStogageData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.greeting}>
          Hello,
        </Text>
        <Text style={styles.name}>
          {userName}
        </Text>
      </View>
      <Image source={userImg} style={styles.avatar}/>
    </SafeAreaView>
  );
}