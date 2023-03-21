import { baseUrl, urls } from './config';
import axios from 'axios';

const API = axios.create({
  baseURL: baseUrl,
});

export const fetchData = async url => {
  try {
    const response = await API.get(url);
    return response.data;
  } catch (error) {
    console.log('Error data:', error);
    throw error;
  }
};

export const getFakeProducts = async () => {
  const data = await fetchData(urls.fkProd);
  return data;
};

export const getUsers = async () => {
  const data = await fetchData(urls.users);
  return data;
};

// export default API;

