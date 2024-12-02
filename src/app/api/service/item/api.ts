import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const createItem = async (item: any) => {
  const response = await axios.post(`${API_BASE_URL}/items`, item);
  return response.data;
};

export const getAllItems = async () => {
  const response = await axios.get(`${API_BASE_URL}/items`);
  return response.data;
};

export const getItemById = async (id: any) => {
  const response = await axios.get(`${API_BASE_URL}/items/${id}`);
  return response.data;
};

export const updateItem = async (id: any, item: any) => {
  const response = await axios.put(`${API_BASE_URL}/items/${id}`, item);
  return response.data;
};

export const deleteItem = async (id: any) => {
  await axios.delete(`${API_BASE_URL}/items/${id}`);
};
