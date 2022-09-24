import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, Platform, Alert } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import { Entypo } from '@expo/vector-icons';

import waterDrop from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';

import { styles } from './styles';
import { THEME } from '../../theme';
import { PlantProps, registerPlant } from '../../utils/storage';

interface Params {
  plant: PlantProps
}

export function RegisterPlant() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();
  
  const { plant } = route.params as Params;

  function handleReturn() {
    navigation.goBack();
  }

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if(Platform.OS === 'android') {
      setShow(oldState => !oldState)
    }

    if(dateTime && isBefore(dateTime, new Date())) {
      setDate(new Date());
      return Alert.alert('Select a valid date! ⏰', 'In the future... or go back in time and try again.')
    }

    setShow(false);

    if(dateTime) {
      setDate(dateTime);
    }
  }

  function showTimepicker() {
    setShow(true);
  };

  async function handleRegisterPlant() {
    try {
      await registerPlant({
        ...plant,
        dateTimeNotification: date
      });

      navigation.navigate('confirmation', {
        title: "It's our turn!",
        subtitle: "We'll let you now when it's to water your plants.",
        buttonTitle: "Thanks!",
        nextScreen: "myPlants",
        icon: "hug"
      });
    } catch {
      Alert.alert('Something went wrong...');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleReturn}>
          <Entypo 
            name="chevron-thin-left"
            color={THEME.COLORS.green}
            size={24}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.plantInfo}>
        <SvgFromUri 
          uri={plant.photo}
          height={150}
          width={150}
        />
        <Text style={styles.plantName}>
          {plant.name}
        </Text>

        <Text style={styles.plantAbout}>
          {plant.about}
        </Text>

      </View>
        
      <View style={styles.plantPanel}>
        <View style={styles.plantTip}>
          <Image 
            source={waterDrop}
            style={styles.tipImg}
          />
          <Text style={styles.tipText}>
            {plant.water_tips}
          </Text>
        </View>

        <Text style={styles.alertLabel}>
          Best hour to water your plant:
        </Text>

        { Platform.OS === 'android' && (
          <TouchableOpacity style={styles.buttonHour} onPress={showTimepicker}>
            <Text style={styles.textButtonHour}>
              {`Change ${format(date, 'HH:mm')}`}
            </Text>
          </TouchableOpacity>
        ) }
        
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            is24Hour={true}
            onChange={handleChangeTime}
          />
        )}

        <Button 
          title="Save plant"
          onPress={handleRegisterPlant}
        />
      </View>

      
    </View>
  );
}