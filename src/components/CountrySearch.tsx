import React, { useState, useEffect, useMemo } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { getCountryStatus, getAllCountriesStatus, CountryData } from '../services/api';
import DataTable from './DataTable';
import 'country-flag-icons/3x2/flags.css'; // Importe os estilos das bandeiras

const CountrySearch: React.FC = () => {
  const [country, setCountry] = useState<string>('');
  const [data, setData] = useState<CountryData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allCountries, setAllCountries] = useState<CountryData[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<CountryData[]>([]);

  useEffect(() => {
    const fetchAllCountries = async () => {
      setIsLoading(true);
      const result = await getAllCountriesStatus();
      setAllCountries(result);
      setIsLoading(false);
    };
    fetchAllCountries();
  }, []);

  useEffect(() => {
    if (country) {
      const filtered = allCountries.filter((c) =>
        c.country.toLowerCase().includes(country.toLowerCase())
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries([]);
    }
  }, [country, allCountries]);

  const handleSearch = async () => {
    if (country) {
      setIsLoading(true);
      const result = await getCountryStatus(country);
      setIsLoading(false);
      if (result) {
        setData([result]);
        setError(null);
      } else {
        setData(null);
        setError('País não encontrado ou erro na API.');
      }
    } else {
      setError('Por favor, digite o nome de um país.');
    }
  };

  // Define as colunas usando useMemo
  const columns = useMemo(
    () => [
      {
        Header: 'País',
        accessor: 'country',
        Cell: ({ value }: { value: string }) => (
          <div className="flex items-center">
            <span className={`fi fi-${getCountryCode(value)} mr-2`}></span>
            {value}
          </div>
        ),
      },
      { Header: 'Casos', accessor: 'cases', Cell: ({ value }: { value: number }) => value || '-' },
      { Header: 'Mortes', accessor: 'deaths', Cell: ({ value }: { value: number }) => value || '-' },
      { Header: 'Recuperados', accessor: 'recovered', Cell: ({ value }: { value: number }) => value || '-' },
    ],
    []
  );

  // Função para obter o código do país (ex: "BR" para Brazil)
  const getCountryCode = (countryName: string): string => {
    const countryCodes: { [key: string]: string } = {
      'Brazil': 'br',
      'United States': 'us',
      'Canada': 'ca',
      // Adicione mais países conforme necessário
    };
    return countryCodes[countryName] || 'unknown'; // Retorna 'unknown' se o país não for encontrado
  };

  // Transforma os dados para o formato esperado pelo DataTable
  const transformData = (data: CountryData[] | null) => {
    if (!data) return [];
    return data.map((item) => ({
      country: item.country,
      cases: item.cases || 0, // Valor padrão para casos
      deaths: item.deaths || 0, // Valor padrão para mortes
      recovered: item.recovered || 0, // Valor padrão para recuperados
    }));
  };

  return (
    <motion.section
      id="countries"
      className="min-h-screen flex items-center justify-center bg-gray-50 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center mb-6"
        >
          <FaGlobeAmericas className="text-blue-500 text-3xl mr-2" />
          <h2 className="text-3xl font-semibold text-gray-800">Status por País</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 mb-8 text-lg"
        >
          Digite o nome de um país para ver o status da COVID-19.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <input
            type="text"
            placeholder="Ex: Brazil"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
          />
          <button
            onClick={handleSearch}
            disabled={!country || isLoading}
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <FaGlobeAmericas className="mr-2" />
                Buscar
              </>
            )}
          </button>
        </motion.div>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-red-500"
          >
            {error}
          </motion.p>
        )}

        {/* Exibir resultados da busca */}
        {data && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <DataTable data={transformData(data)} columns={columns} />
          </motion.div>
        )}

        {/* Exibir lista filtrada de países */}
        {filteredCountries.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Resultados da Busca</h3>
            <DataTable data={transformData(filteredCountries)} columns={columns} />
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default CountrySearch;