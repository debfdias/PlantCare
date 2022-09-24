import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, View, Text, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../components/Button';
import { THEME } from '../../theme';
import { styles } from './styles';

export function UserID() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>('');

  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFocused(!!value);
    setName(value);
  }

  async function handleConfirm() {
    if(!name)
      return Alert.alert('How we should call you? 🤨');

    try{
      await AsyncStorage.setItem('@plantcare:user', name);
      navigation.navigate('confirmation', {
        title: "Ready to go!",
        subtitle: `Now we'll take care of your plants! ${"\n"} When it's time to water them, we'll let you know!`,
        buttonTitle: "Let's go",
        nextScreen: "plantSelector",
        icon: "smile"
      });

    } catch {
      return Alert.alert('Something went wrong...')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <Text style={styles.emoji}>
                { isFilled ? '😉' : '🧐'}
              </Text>

              <Text style={styles.title}>
                How can we {"\n"}
                call you?
              </Text>

              <TextInput 
                placeholder='Type your name'
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                style={[
                  styles.input,
                  (isFocused || isFilled) && 
                  { borderColor: THEME.COLORS.green}
                ]}
                onChangeText={handleInputChange}
                value={name}
              />

              <View style={styles.footer}>
                <Button 
                  title='Confirm'
                  onPress={handleConfirm}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
    </SafeAreaView>
  );
}