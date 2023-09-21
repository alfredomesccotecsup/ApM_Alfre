import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function GalleryScreen() {
  
  const galleryData = [
    { id: '1', imageUri: 'https://fondosanimados.com/wp-content/uploads/2023/04/barcos-1.jpg' },
    { id: '2', imageUri: 'https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp' },
    { id: '3', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1IeYBN05o8IgBtr0rdj4MgMeo6HW3g1FmKA&usqp=CAU' },
    { id: '4', imageUri: 'https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg' },
    { id: '5', imageUri: 'https://img.freepik.com/foto-gratis/belleza-naturaleza-refleja-aguas-tranquilas-montanas-ia-generativa_188544-7867.jpg' },
    { id: '6', imageUri: 'https://img.freepik.com/fotos-premium/islas-lofoten-noruega-reine-lofoten-atardecer-montana-invierno-snow-mar-agua-reflejo-naturaleza_955695-1365.jpg?w=360' },
    { id: '7', imageUri: 'https://www.tuexperto.com/wp-content/uploads/2022/02/17-fondos-de-pantalla-para-pc-de-playas-0.jpg' },
    { id: '8', imageUri: 'https://www.xtrafondos.com/thumbs/1_2981.jpg' },
    { id: '9', imageUri: 'https://w0.peakpx.com/wallpaper/163/338/HD-wallpaper-top-full-nature-full-for-pc-deskto-fondos-de-pantalla-naturaleza-hermosos-fondos-de-pantalla-fondo-de-pantalla-tropical-1600x900-nature.jpg' },
    { id: '10', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DzGdo1LP9ue3YgvLSKduVVxhCrm151pG1Q&usqp=CAU' },
    { id: '11', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikfyla6Rmv0OmCUFpZr8E5geUv8ajiMSOZw&usqp=CAU' },
    { id: '12', imageUri: 'https://cdn.wallpapersafari.com/38/24/ws7oQ8.jpg' },
    
  ];

  const handleLikePress = (itemId) => {
    // la lógica para gestionar los "me gusta" de una imagen
  };

  const handleSharePress = (itemId) => {
    // la lógica para compartir una imagen
  };

  const handleDownloadPress = (itemId) => {
    // la lógica para descargar una imagen
  };

  const handleCommentPress = (itemId) => {
    //la lógica para ver o agregar comentarios
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galería de Imágenes</Text>
      <FlatList
        data={galleryData}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageContainer} onPress={() => handleCommentPress(item.id)}>
            <Image
              source={{ uri: item.imageUri }}
              style={styles.image}
            />
            <View style={styles.iconRow}>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => handleLikePress(item.id)}
              >
                <Icon name="heart" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => handleSharePress(item.id)}
              >
                <Icon name="share" size={24} color="#3498db" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => handleDownloadPress(item.id)}
              >
                <Icon name="download" size={24} color="#2ecc71" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333', 
  },
  imageContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 8,
    right: 8,
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 24, 
    padding: 12, 
    margin: 4,
  },
});

export default GalleryScreen;
