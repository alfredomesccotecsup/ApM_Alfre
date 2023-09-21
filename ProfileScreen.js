import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';

const profiles = [
  {
    name: 'Alex Smith',
    imageUrl: 'https://statics.launion.digital/2021/02/crop/601bd71c94af8__940x620.webp',
    color: 'rgba(52, 152, 219, 0.8)',
    bio: 'Amante de la naturaleza y la aventura. Viajero apasionado en busca de nuevas experiencias.',
    location: 'Nueva York, NY',
    profession: 'Explorador de la naturaleza',
  },
  {
    name: 'Juan Ingaramo',
    imageUrl: 'https://www.eloccidental.com.mx/gossip/culq5m-juan-ingaramo.jpeg/ALTERNATES/LANDSCAPE_768/Juan%20Ingaramo.jpeg',
    color: 'rgba(231, 76, 60, 0.8)',
    bio: 'Apasionado por la música y el arte. Buscando inspiración en cada nota y cada pincelada.',
    location: 'Mexico',
    profession: 'Artista Musical',
  },
  {
    name: 'Carlos Rodriguez',
    imageUrl: 'https://lmdiario.com.ar/download/multimedia.normal.a397a42bb380e899.436f63696e6120496e7465726e5f6e6f726d616c2e6a7067.jpg',
    color: 'rgba(46, 204, 113, 0.8)',
    bio: 'Amante de la comida y los viajes. Explorador culinario en busca de los sabores del mundo.',
    location: 'San Francisco, CA',
    profession: 'Foodie y Viajero',
  },
  {
    name: 'Sophia Martin',
    imageUrl: 'https://blogs.iadb.org/innovacion/wp-content/uploads/sites/32/2020/05/innovacion-crisis-y-crecimiento-futuro-01.jpg',
    color: 'rgba(241, 196, 15, 0.8)',
    bio: 'Explorador de la tecnología y la ciencia. En busca de soluciones innovadoras para el mundo.',
    location: 'Austin, TX',
    profession: 'Ingeniero de Innovación',
  },
  {
    name: 'Daniel Anderson',
    imageUrl: 'https://medialab.unmsm.edu.pe/chiqaqnews/wp-content/uploads/2021/12/Deporte-feria.jpg',
    color: 'rgba(155, 89, 182, 0.8)',
    bio: 'Fanático de los deportes y el fitness. Comprometido con una vida activa y saludable.',
    location: 'Miami, FL',
    profession: 'Entrenador de Fitness',
  },
  {
    name: 'Olivia Davis',
    imageUrl: 'https://monicachic.com/wp-content/uploads/2020/12/especial-tendencias-oton%CC%83o-invierno.jpg',
    color: 'rgba(230, 126, 34, 0.8)',
    bio: 'Amante de la moda y el diseño. Creando tendencias en el mundo de la moda.',
    location: 'Chicago, IL',
    profession: 'Diseñador de Moda',
  },
];


function ProfileScreen({ navigation }) {
  const chunkedProfiles = chunkArray(profiles, 2);

  return (
    <ImageBackground
      source={{ uri: 'https://user-images.githubusercontent.com/81328619/213875785-400ae517-156b-4aca-a787-bac75d84c393.gif' }}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {chunkedProfiles.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((profile, index) => (
              <Animatable.View
                key={index}
                animation="fadeInUp"
                delay={index * 200}
                style={[styles.profileContainer, { backgroundColor: profile.color }]}
              >
                <Image source={{ uri: profile.imageUrl }} style={styles.profileImage} />
                <Text style={styles.profileName}>{profile.name}</Text>
                <Text style={styles.profileProfession}>{profile.profession}</Text>
                <Text style={styles.profileLocation}>{profile.location}</Text>
                <Text style={styles.profileBio}>{profile.bio}</Text>
                <TouchableOpacity
                  style={styles.viewProfileButton}
                  onPress={() => navigation.navigate('Perfil')}
                >
                  <Text style={styles.viewProfileButtonText}>Ver Perfil</Text>
                </TouchableOpacity>
              </Animatable.View>
            ))}
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

function chunkArray(array, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileContainer: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.7)',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  profileProfession: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  profileLocation: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 5,
  },
  profileBio: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 10,
  },
  viewProfileButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  viewProfileButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
