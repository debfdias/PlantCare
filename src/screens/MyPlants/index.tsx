import React, { useEffect, useState } from 'react';
import { View, 
  Text, 
  Image
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { formatDistance } from 'date-fns';
import { enUS } from 'date-fns/locale';

import waterDrop from '../../assets/waterdrop.png';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { loadPlant, PlantProps } from '../../utils/storage';
import { FlatList } from 'react-native-gesture-handler';
import { PlantCard } from '../../components/PlantCard';


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

  useEffect(() => {
    loadStorageData();
  }, []);

  const route = useRoute();
  const navigation = useNavigation();


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

        <FlatList 
          data={myPlants}
          keyExtractor={(item) => String(item.id)} 
          renderItem={({ item }) => (
            <PlantCard 
              data={item}
            />
          )}
          contentContainerStyle={{ flex: 1 }}
          showsVerticalScrollIndicator={false}        
        />
      </View>
    </View>
  );
}