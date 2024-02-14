import axios from 'axios';
import { ICarCharacteristics } from '../types/aboutCars';

const BASE_URL = 'https://65213eb8a4199548356cf568.mockapi.io';

export const getCars = async (): Promise<ICarCharacteristics[]> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/cars`);
    return data;
  } catch (error: any) {
    return error?.response.status;
  }
};
