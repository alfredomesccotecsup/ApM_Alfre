import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Divider, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      <Divider style={styles.divider} />

      <List.Section>
        <List.Subheader>General</List.Subheader>
        <List.Item
          title="Perfil"
          left={() => <List.Icon icon="user" />}
          onPress={() => {
           
          }}
        />
        <List.Item
          title="Notificaciones"
          left={() => <List.Icon icon="bell" />}
          onPress={() => {
            
          }}
        />
        <List.Item
          title="Privacidad"
          left={() => <List.Icon icon="lock" />}
          onPress={() => {
            
          }}
        />
      </List.Section>

      <Divider style={styles.divider} />

      <List.Section>
        <List.Subheader>Redes Sociales</List.Subheader>
        <List.Item
          title="Facebook"
          left={() => <Icon name="facebook" size={24} color="#3b5998" />}
          onPress={() => {
            
          }}
        />
        <List.Item
          title="Twitter"
          left={() => <Icon name="twitter" size={24} color="#1da1f2" />}
          onPress={() => {
           
          }}
        />
        <List.Item
          title="Instagram"
          left={() => <Icon name="instagram" size={24} color="#c32aa3" />}
          onPress={() => {
            
          }}
        />
      </List.Section>

      {}
      <Button
        mode="contained"
        style={styles.customButton}
        onPress={() => {
          
        }}
      >
        Acción Personalizada
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  divider: {
    height: 2,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
  customButton: {
    marginTop: 20,
    backgroundColor: '#3498db', 
  },
});

export default SettingsScreen;
