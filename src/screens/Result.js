import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import yelp from '../api/yelp';

const Result = ({ route }) => {
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const resp = await yelp.get(`/${id}`);
    setResult(resp.data);
  };

  useEffect(() => {
    getResult(route.params.id);
  }, []);

  return result ? (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    marginBottom: 15,
  },
});

export default Result;
