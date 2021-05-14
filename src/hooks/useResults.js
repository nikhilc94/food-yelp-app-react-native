import { useState, useEffect } from 'react';

import yelp from '../api/yelp';

export default (searchTerm, location) => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const resp = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location,
        },
      });
      setResults(resp.data.businesses);
    } catch (err) {
      setErrorMsg('Something went wrong!');
    }
  };

  useEffect(() => {
    searchApi(searchTerm);
  }, []);

  return [searchApi, results, errorMsg];
};
