import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ContactScreen() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const sendMessage = () => {
    
    console.log('Mensaje enviado:', message);
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Teléfono:', phone);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Contacto</Text>
        <TextInput
          placeholder="Escribe tu mensaje"
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={styles.textInput}
          multiline={true}
        />
        <TextInput
          placeholder="Nombre"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Teléfono"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={styles.input}
        />
        <Button title="Enviar Mensaje" onPress={sendMessage} />

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="phone" size={24} color="#3498db" />
            <Text style={styles.iconText}>Llamar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="envelope" size={24} color="#e74c3c" />
            <Text style={styles.iconText}>Correo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="whatsapp" size={24} color="#2ecc71" />
            <Text style={styles.iconText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="map-marker" size={24} color="#f1c40f" />
            <Text style={styles.iconText}>Ubicación</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="facebook" size={24} color="#3b5998" />
            <Text style={styles.iconText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="twitter" size={24} color="#1da1f2" />
            <Text style={styles.iconText}>Twitter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contactInfo}>
        <Text style={styles.infoLabel}>Dirección:</Text>
        <Text style={styles.infoText}>Las Flores, Arequipa</Text>

        <Text style={styles.infoLabel}>Teléfono:</Text>
        <Text style={styles.infoText}>910132978</Text>

        <Text style={styles.infoLabel}>Correo Electrónico:</Text>
        <Text style={styles.infoText}>rosendo.mescco@tecsup.edu.pe</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    width: '80%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  textInput: {
    height: 120,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    height: 40,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  iconContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 32,
    padding: 16,
    alignItems: 'center',
    marginVertical: 12,
    width: '45%',
  },
  iconText: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  contactInfo: {
    marginTop: 24,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
  },
});

export default ContactScreen;
