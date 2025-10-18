import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Gw5VdAhg8GTJ-2amiyDMQBatYXUTM2M",
  authDomain: "meu-primeiro-firebase-ed4c4.firebaseapp.com",
  projectId: "meu-primeiro-firebase-ed4c4",
  storageBucket: "meu-primeiro-firebase-ed4c4.firebasestorage.app",
  messagingSenderId: "641687386459",
  appId: "1:641687386459:web:219f04defa7f9f32d2827e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}