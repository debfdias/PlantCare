import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

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

  function handleConfirm() {
    navigation.navigate('confirmation');
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