
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScientistCard = ({ scientist }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{scientist.name}</Text>
      <Text style={styles.field}>{scientist.field}</Text>
      <Text style={styles.description}>{scientist.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 10, margin: 10, borderRadius: 8, elevation: 2 },
  name: { fontSize: 16, fontWeight: 'bold' },
  field: { fontSize: 14, color: 'gray' },
  description: { fontSize: 12, marginTop: 5 }
});

export default ScientistCard;
