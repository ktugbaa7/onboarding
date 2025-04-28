import axios from 'axios';
import {API_URL} from '@env';
import {
  QuestionsResponse,
  CategoriesResponse,
} from '../types/apiTypes';

const BASE_URL = process.env.API_URL;

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


