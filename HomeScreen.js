import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <ImageBackground
        source={{ uri: 'https://40.media.tumblr.com/1b916597d3e174399cb7adadddb66ede/tumblr_nt5uk4psl31ud7rr3o1_1280.jpg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Pagina de Inicio</Text>
          <Text style={styles.subheader}>Bienvenido, gracias por estar aqui.</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'rgba(192, 192, 192, 0.9)' }]}
              onPress={() => navigation.navigate('Twitter')}
            >
              <Icon name="twitter" size={30} color="#000" style={styles.icon} />
              <Text style={styles.buttonText}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'rgba(192, 192, 192, 0.9)' }]}
              onPress={() => navigation.navigate('Github')}
            >
              <Icon name="github" size={30} color="#000" style={styles.icon} />
              <Text style={styles.buttonText}>Github</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'rgba(192, 192, 192, 0.9)' }]}
              onPress={() => navigation.navigate('Linkedin')}
            >
              <Icon name="linkedin" size={30} color="#000" style={styles.icon} />
              <Text style={styles.buttonText}>Linkedin</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'rgba(192, 192, 192, 0.9)' }]}
              onPress={() => navigation.navigate('freeCodeCamp')}
            >
              <Icon name="free-code-camp" size={30} color="#000" style={styles.icon} />
              <Text style={styles.buttonText}>freeCodeCamp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 855, // Set the height as needed
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 20,
    textShadow: '2px 1px 2px #000',
  },
  subheader: {
    textShadow: '1px 1px 1px rgba(0,0,0,0.6)',
    color: 'black',
    fontSize: 24,
  },
  socialButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(192, 192, 192, 0.9)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 12,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  icon: {
    marginRight: 10,
  },
});

export default HomeScreen;
