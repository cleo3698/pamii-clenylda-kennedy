import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailsScreen() {
  const { title } = useLocalSearchParams<{ title: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes</Text>
      <Text style={styles.detail}>Título: {title}</Text>
      <Text style={styles.detail}>Descrição: Lorem ipsum dolor sit amet...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  detail: { fontSize: 18, marginBottom: 5 }
});
