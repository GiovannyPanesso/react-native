import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MyApp = () => {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleNombreChange = (text) => {
    setNombre(text);
  };

  const handleContraseñaChange = (text) => {
    setContraseña(text);
  };

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica de enviar los datos, como hacer una petición a un servidor, etc.
    console.log('Nombre:', nombre);
    console.log('Contraseña:', contraseña);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyApp</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={handleNombreChange}
          placeholder="Introduce tu nombre"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          value={contraseña}
          onChangeText={handleContraseñaChange}
          placeholder="Introduce tu contraseña"
          secureTextEntry={true}
        />
      </View>
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    fontSize: 16,
  },
});

export default MyApp;
