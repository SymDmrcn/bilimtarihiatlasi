
import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const MapScreen = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "atlas_entries"));
      const points = querySnapshot.docs.map(doc => doc.data());
      setPoints(points);
    };
    fetchData();
  }, []);

  return (
    <MapView
      style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
      initialRegion={{
        latitude: 39.0,
        longitude: 35.0,
        latitudeDelta: 20,
        longitudeDelta: 20,
      }}
    >
      {points.map((p, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: p.latitude, longitude: p.longitude }}
          title={p.name}
        />
      ))}
    </MapView>
  );
};

export default MapScreen;
