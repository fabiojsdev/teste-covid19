import React, { useState } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { getCountryStatus, CountryData } from '../services/api';
import DataTable from './DataTable';

const CountrySearch: React.FC = () => {
  const [country, setCountry] = useState<string>('');
  const [data, setData] = useState<CountryData[] | null>(null);
  const [error, setError] = useState<string | null>(null); 

  const handleSearch = async () => {
    if (country) {
      const result = await getCountryStatus(country);
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

  const columns = ['country', 'cases', 'deaths']; 

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        <FaGlobeAmericas className="mr-2 text-blue-500" />
        Status por País
      </h2>
      <p className="text-gray-600 mb-4">

      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Ex: Brazil"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="p-2 border rounded-md flex-1"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <FaGlobeAmericas className="mr-2" />
          Buscar
        </button>
      </div>
      {error && <p className="mt-6 text-red-500">{error}</p>} 
      {data && !error && ( 
        <div className="mt-6">
          <DataTable data={data} columns={columns} />
        </div>
      )}
    </div>
  );
};

export default CountrySearch;