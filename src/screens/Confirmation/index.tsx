import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';

import { Button } from '../../components/Button';

import { styles } from './styles';

export function Confirmation() {
  const navigation = useNavigation();

  function handleContinue(){
    navigation.navigate('plantSelector');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😊
        </Text>

        <Text style={styles.title}>
          Ready to go!
        </Text>

        <Text style={styles.subtitle}>
          Now we'll take care of your plants! {"\n"}
          When it's time to water them, we'll let you know!
        </Text>

        <View style={styles.footer}>
          <Button 
            title="Let's go!"
            onPress={handleContinue}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}