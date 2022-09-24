import React, { useEffect, useState } from 'react';
import { View, 
  Text, 
  Image,
  Alert
} from 'react-native';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { formatDistance } from 'date-fns';
import { enUS } from 'date-fns/locale';

import { Header } from '../../components/Header';
import { PlantCard } from '../../components/PlantCard';
import { Load } from '../../components/Load';

import { styles } from './styles';
import { loadPlant, PlantProps, deletePlant } from '../../utils/storage';
import waterDrop from '../../assets/waterdrop.png';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWater, setNextWater] = useState<string>();

  async function loadStorageData() {
    const plantsStoraged = await loadPlant();

    const nextTime = formatDistance(
      new Date(plantsStoraged[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      { locale: enUS }
    );

    setNextWater(
      `Don't forget to water your ${plantsStoraged[0].name} in ${nextTime}.`
    );

    setMyPlants(plantsStoraged);
    setLoading(false);
  }

  function handleDelete(plant: PlantProps) {
    Alert.alert('Delete', `Are you sure you want to delete ${plant.name}?`, [
      {
        text: 'No',
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await deletePlant(plant.id);

            setMyPlants((oldData) => oldData.filter((item) => item.id != plant.id));

          } catch (error) {
            Alert.alert('Something went wrong...');
          }
        }
      }
    ])
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  if(loading)
    return <Load />
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterDrop} style={styles.spotlightImg}/>
        <Text style={styles.spotlightText}>
          {nextWater}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantTitle}>
          Next waterings
        </Text>

        <GestureHandlerRootView style={styles.wrapper}>
          <FlatList 
            data={myPlants}
            keyExtractor={(item) => String(item.id)} 
            renderItem={({ item }) => (
              <PlantCard 
                data={item}
                handleDelete={() => handleDelete(item)}
              />
            )} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20}}
          />
        </GestureHandlerRootView>
      </View>
    </View>
  );
}