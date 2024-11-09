import React from "react";
import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack screenOptions={{title:'Recipe Book', headerShown: true}}>
      <Stack.Screen name="(tabs)"/>
    </Stack>
    
  );
}
