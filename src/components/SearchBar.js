import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name='search' style={styles.icon} />
      <TextInput
        value={term}
        autoCorrect={false}
        placeholder='Search'
        style={styles.input}
        autoCapitalize='none'
        onChangeText={onTermChange}
        onEndEditing={() => onTermSubmit(term)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 50,
    marginTop: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    marginHorizontal: 15,
    backgroundColor: '#F0EEEE',
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
