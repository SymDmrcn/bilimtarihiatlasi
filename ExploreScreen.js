
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import ScientistCard from '../components/ScientistCard';

const ExploreScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchScientists = async () => {
      const querySnapshot = await getDocs(collection(db, "atlas_entries"));
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(list);
    };
    fetchScientists();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ScientistCard scientist={item} />}
      />
    </View>
  );
};

export default ExploreScreen;
