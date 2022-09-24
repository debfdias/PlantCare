import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PlantSelector } from "../screens/PlantSelector";
import { MyPlants } from "../screens/MyPlants";
import { MaterialIcons } from "@expo/vector-icons";
import { THEME } from "../theme";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: THEME.COLORS.green,
          tabBarInactiveTintColor: THEME.COLORS.body_dark,
          tabBarLabelPosition: "beside-icon",
          headerShown: false
        })}
      >
        <Tab.Screen name="Add plant" component={PlantSelector} options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialIcons name="add-circle-outline" size={size} color={color}/>
          },
          }
        }
        />
        <Tab.Screen name="My plants" component={MyPlants} options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialIcons name="format-list-bulleted" size={size} color={color}/>
          },
          }} 
        />
      </Tab.Navigator>
  )
}