import axios from 'axios';

export interface CovidData {
  [key: string]: string | number | boolean | undefined; 
  uid?: number;
  uf?: string;
  state?: string;
  cases: number;
  deaths: number;
  suspects?: number;
  refuses?: number;
  broadcast?: boolean; 
  comments?: string;
  datetime?: string;
  country?: string;
  confirmed?: number;
  recovered?: number;
  updated_at?: string;
}

export interface StateData extends CovidData {
  uf: string; 
  state: string; 
}

export interface CountryData {
  [key: string]: string | number | boolean | undefined; 
  country: string;
  cases: number;
  deaths: number;
  recovered?: number;
  updated_at?: string;
}

const api = axios.create({
  baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1',
});

export const getBrazilStatus = async (): Promise<CovidData[]> => {
  try {
    const response = await api.get('/');
    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar dados do Brasil:', error);
    return [];
  }
};

export const getStateStatus = async (uf: string): Promise<StateData | null> => {
  try {
    const response = await api.get(`/brazil/uf/${uf}`);
    return response.data as StateData; 
  } catch (error) {
    console.error(`Erro ao buscar dados do estado ${uf}:`, error);
    return null;
  }
};

export const getBrazilStatusByDate = async (date: string): Promise<CovidData[]> => {
  try {
    const response = await api.get(`/brazil/${date}`);
    return response.data.data as CovidData[]; 
  } catch (error) {
    console.error(`Erro ao buscar dados do Brasil na data ${date}:`, error);
    return [];
  }
};

export const getCountryStatus = async (country: string): Promise<CountryData | null> => {
  try {
    const response = await api.get(`/countries/${country}`);
    if (response.data && response.data.data) {
      return response.data.data; 
    } else {
      console.error('Dados do país não encontrados:', response.data);
      return null;
    }
  } catch (error) {
    console.error(`Erro ao buscar dados do país ${country}:`, error);
    return null;
  }
};