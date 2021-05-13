import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer v5g838WreHPc1oGN9thsRdMxdsP9P5n4K20JgfnU3l0MyyqTbng-v3uULlQVDigZVoKHVJKhUaNAwlqwsJalTMtvGXpUh7IIL_wPY8alvnmmz_DD1Qc_OkcjDHWaYHYx',
  },
});
