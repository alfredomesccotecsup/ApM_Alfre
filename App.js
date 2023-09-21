import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import GalleryScreen from './GalleryScreen';
import ContactScreen from './ContactScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
        <Drawer.Screen name="Configuración" component={SettingsScreen} />
        <Drawer.Screen name="Galería" component={GalleryScreen} />
        <Drawer.Screen name="Contacto" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
