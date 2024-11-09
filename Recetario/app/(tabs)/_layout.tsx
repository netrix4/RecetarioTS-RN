import { Tabs } from "expo-router";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Halo from "./Halo";
import HomeScreen from ".";
import DishesMenu from "./DishesMenu";

export type RootStackParams = {
  Dishes: string[];
  name: string;

}

// const Stack = createNativeStackNavigator<RootStackParams>();
const Stack = createNativeStackNavigator();

export default function TabLayout() {
  return (
    // <Tabs screenOptions={{ headerShown: false }}>

    //   <Tabs.Screen name="index" options={{ title: "Index" }} />
    //   <Tabs.Screen name="halo" options={{ title: "Otra Seccion" }} />
    // </Tabs>
    
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name='Index'
          component={HomeScreen}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen
          name='DishesMenu'
          component={DishesMenu}
          options={{title: 'Dishes Menu', headerShown: false}}
        />
        <Stack.Screen
          name='Halo'
          component={Halo}
          options={{title: 'Halo', headerShown: false}}
        />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}
