import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { getBrazilStatusByDate, CovidData } from '../services/api';
import DataTable from './DataTable';

const DatePicker: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [data, setData] = useState<CovidData[] | null>(null);
  const [error, setError] = useState<string | null>(null); 

  const handleSearch = async () => {
    if (date) {
      
      const formattedDate = date.replace(/-/g, '');
      const result = await getBrazilStatusByDate(formattedDate);
      if (result && result.length > 0) {
        setData(result); 
        setError(null); 
      } else {
        setData(null); 
        setError('Nenhum dado disponível para esta data.'); 
      }
    } else {
      setError('Por favor, insira uma data.'); 
    }
  };

  const columns = ['state', 'cases', 'deaths']; 

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        <FaCalendarAlt className="mr-2 text-blue-500" />
        Status por Data
      </h2>
      <p className="text-gray-600 mb-4">
        Insira uma data para ver o status da COVID-19 no Brasil naquele dia.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded-md flex-1"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <FaCalendarAlt className="mr-2" />
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

export default DatePicker;