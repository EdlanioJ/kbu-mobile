import React from 'react';

import {
  useFonts,
  Archivo_400Regular,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo400: Archivo_400Regular,
    Archivo700: Archivo_700Bold,
    Poppins400: Poppins_400Regular,
    Poppins700: Poppins_700Bold,
    Roboto100: Roboto_100Thin,
    Roboto400: Roboto_400Regular,
    Roboto500: Roboto_500Medium,
    Roboto700: Roboto_700Bold,
    Roboto900: Roboto_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
