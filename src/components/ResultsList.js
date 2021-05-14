import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();

  return results.length ? (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Result', { id: item.id })}
          >
            <ResultsDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default ResultsList;
