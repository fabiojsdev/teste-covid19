import axios from 'axios';

// Interfaces para tipagem dos dados
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

// Configuração do axios
const api = axios.create({
  baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1',
});

// Funções para buscar dados

/**
 * Busca os dados do Brasil.
 * @returns Uma lista de dados sobre a COVID-19 no Brasil.
 */
export const getBrazilStatus = async (): Promise<CovidData[]> => {
  try {
    const response = await api.get('/');
    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error('Dados do Brasil não encontrados.');
    }
  } catch (error) {
    console.error('Erro ao buscar dados do Brasil:', error);
    return [];
  }
};

/**
 * Busca os dados de um estado específico.
 * @param uf - A sigla do estado (ex: "SP").
 * @returns Os dados do estado ou null se não forem encontrados.
 */
export const getStateStatus = async (uf: string): Promise<StateData | null> => {
  try {
    const response = await api.get(`/brazil/uf/${uf}`);
    if (response.data) {
      return response.data as StateData;
    } else {
      throw new Error(`Dados do estado ${uf} não encontrados.`);
    }
  } catch (error) {
    console.error(`Erro ao buscar dados do estado ${uf}:`, error);
    return null;
  }
};

/**
 * Busca os dados do Brasil em uma data específica.
 * @param date - A data no formato "YYYYMMDD".
 * @returns Uma lista de dados sobre a COVID-19 no Brasil naquela data.
 */
export const getBrazilStatusByDate = async (date: string): Promise<CovidData[]> => {
  try {
    const response = await api.get(`/brazil/${date}`);
    if (response.data && response.data.data) {
      return response.data.data as CovidData[];
    } else {
      throw new Error(`Dados do Brasil na data ${date} não encontrados.`);
    }
  } catch (error) {
    console.error(`Erro ao buscar dados do Brasil na data ${date}:`, error);
    return [];
  }
};

/**
 * Busca os dados de um país específico.
 * @param country - O nome do país (ex: "Brazil").
 * @returns Os dados do país ou null se não forem encontrados.
 */
export const getCountryStatus = async (country: string): Promise<CountryData | null> => {
  try {
    const response = await api.get(`/countries/${country}`);
    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error(`Dados do país ${country} não encontrados.`);
    }
  } catch (error) {
    console.error(`Erro ao buscar dados do país ${country}:`, error);
    return null;
  }
};

/**
 * Busca os dados de todos os países.
 * @returns Uma lista de dados sobre a COVID-19 em todos os países.
 */
export const getAllCountriesStatus = async (): Promise<CountryData[]> => {
  try {
    const response = await api.get('/countries');
    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error('Dados dos países não encontrados.');
    }
  } catch (error) {
    console.error('Erro ao buscar dados dos países:', error);
    return [];
  }
};