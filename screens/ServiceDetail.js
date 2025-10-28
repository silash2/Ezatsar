// screens/ServiceDetail.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StarRating from '../components/StarRating';

export default function ServiceDetail() {
  // Exemple de données d’un service (à remplacer par props ou API)
  const service = {
    name: "Restaurant Malagasy",
    category: "Restauration",
    address: "Antananarivo, Madagascar",
  };

  const [userRating, setUserRating] = useState(0);

  const handleRating = (value) => {
    setUserRating(value);
    // Ici tu peux ajouter du code pour sauvegarder la note (API, Firebase, etc.)
    console.log("Note enregistrée :", value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{service.name}</Text>
      <Text style={styles.category}>{service.category}</Text>
      <Text style={styles.address}>Adresse : {service.address}</Text>

      <StarRating initialRating={userRating} onRatingCompleted={handleRating} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 18,
    color: '#666',
    marginVertical: 4,
  },
  address: {
    fontSize: 16,
    marginBottom: 20,
  },
});
