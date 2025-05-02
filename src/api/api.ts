import axios from 'axios';
import {
  QuestionsResponse,
  CategoriesResponse,
} from '../types/apiTypes';

const BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

export const getCategories = async (): Promise<CategoriesResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/getCategories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getQuestions = async (): Promise<QuestionsResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/getQuestions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};


