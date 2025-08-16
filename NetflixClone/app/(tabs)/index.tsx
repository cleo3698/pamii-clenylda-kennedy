import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/netflix-logo.png')} style={styles.logo} resizeMode="contain" />

      
      <Text style={styles.title}>Netflix Clone</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/CatalogScreen')}>
        <Text style={styles.buttonText}>Ver Catálogo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={() => alert('Você saiu!')}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 30
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 40,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#E50914',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 15
  },
  logoutButton: {
    backgroundColor: '#555'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
