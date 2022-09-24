import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../screens/Welcome';
import { UserID } from '../screens/UserID';
import { Confirmation } from '../screens/Confirmation';
import { PlantSelector } from "../screens/PlantSelector";
import { RegisterPlant } from "../screens/RegisterPlant";
import { MyPlants } from "../screens/MyPlants";
import { TabRoutes } from "./tab.routes";


const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>

      <Screen 
        name="welcome"
        component={Welcome}
      />

      <Screen 
        name="userID"
        component={UserID}
      />

      <Screen 
        name="confirmation"
        component={Confirmation}
      />

      <Screen 
        name="plantSelector"
        component={TabRoutes}
      />

      <Screen 
        name="registerPlant"
        component={RegisterPlant}
      />

      <Screen 
        name="myPlants"
        component={TabRoutes}
      />
    </Navigator>
  )
}