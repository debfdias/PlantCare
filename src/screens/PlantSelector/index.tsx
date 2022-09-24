import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { PlantCardSelector } from '../../components/PlantCardSelector';
import { Load } from '../../components/Load';
import { PlantProps } from '../../utils/storage';
import api from '../../services/api';

import { styles } from './styles';
import { THEME } from '../../theme';

interface EnvironmentProps {
  key: string;
  title: string;
}

export function PlantSelector() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>();
  const [plants, setPlants] = useState<PlantProps[]>();
  const [filterPlants, setFilterPlants] = useState<PlantProps[]>();
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  function handleSelectEnvironment(environment: string) {
    setEnvironmentSelected(environment);

    if(environment == 'all')
    {
      return setFilterPlants(plants);
    }

    const filterResult = plants?.filter(plant =>
      plant.environments.includes(environment));

      setFilterPlants(filterResult);
  }

  async function loadEnvironmentData() {
    const { data } = await api.get('/plants_environments');
    setEnvironments([
      {
        key: 'all',
        title: 'All'
      },
      ...data
    ]);
  }
  
  async function loadPlants() {
    const { data } = await api.get(`/plants?_page=${page}&_limit=8`);

    if(!data) {
      return setIsLoading(true);
    }

    if(page > 1) {
      setPlants(oldValue => [... oldValue as PlantProps[], ...data]);
      setFilterPlants(oldValue => [... oldValue as PlantProps[], ...data]);
    } else {
      setPlants(data);
      setFilterPlants(data);
    }
    
    setIsLoading(false);
    setLoadingMore(false);
  }

  function handlePlantSelect(plant: PlantProps){
    navigation.navigate('registerPlant', { plant });
  }

  function handleLoadMore(distance: number){
    if(distance < 1)
      return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    loadPlants();
  }

  useEffect(() => {
    loadEnvironmentData();
    loadPlants();
    
  }, []);

  if(isLoading)
    return <Load />
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>
          In which environment 
        </Text>
        <Text style={styles.subtitle}>
          you want to place your plant?
        </Text>
      </View>

      <View>
        <FlatList 
          data={environments}
          keyExtractor={(item) => item.key}
          renderItem={( { item } ) => (
            <EnvironmentButton 
              title={item.title}
              active={item.key === environmentSelected}
              onPress={ () => handleSelectEnvironment(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>

      <View style={styles.plantsList}>
        <FlatList 
          data={filterPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={( { item } ) => (
            <PlantCardSelector 
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleLoadMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore ?
            <ActivityIndicator color={THEME.COLORS.green} /> : <></>
          }
        />
      </View>

    </View>
  );
}