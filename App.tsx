import { StatusBar } from 'react-native';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  });
  return (
    <>
      <StatusBar 
        backgroundColor='transparent'
        translucent
        barStyle='dark-content'
      />
      {fontsLoaded ? <Routes /> :  <Loading />}
    </>
    
  );
}
