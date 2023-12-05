import axios from 'axios';
import { rapidApiKey } from '../constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'X-RapidAPI-Key': '1e992522ccmshcc104f0aa45a1abp1f58f4jsn4b9db97e5661',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log('error: ', err.message);
  }
};

export const fetchExercisesByBodypart = async (bodyPart) => {
  let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
