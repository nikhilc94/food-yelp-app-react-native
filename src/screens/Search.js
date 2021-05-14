import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';

import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  const [searchApi, results, errorMsg] = useResults('pizza', 'san jose');

  const resultGroup = {
    cheap: [],
    medium: [],
    expensive: [],
  };
  results.forEach((result) => {
    switch (result.price) {
      case '$':
        resultGroup.cheap.push(result);
        break;
      case '$$':
        resultGroup.medium.push(result);
        break;
      case '$$$':
        resultGroup.expensive.push(result);
        break;
    }
  });

  return (
    <>
      <SearchBar
        term={term}
        onTermSubmit={searchApi}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ScrollView>
        <ResultsList title='Cost Effective' results={resultGroup.cheap} />
        <ResultsList title='Bit Pricier' results={resultGroup.medium} />
        <ResultsList title='Big Spender' results={resultGroup.expensive} />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
