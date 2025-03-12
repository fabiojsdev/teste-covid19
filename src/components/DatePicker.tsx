import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { getBrazilStatusByDate, CovidData } from '../services/api';
import DataTable from './DataTable';

const DatePicker: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [data, setData] = useState<CovidData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (date) {
      setIsLoading(true);
      const formattedDate = date.replace(/-/g, '');
      const result = await getBrazilStatusByDate(formattedDate);
      setIsLoading(false);
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
    <motion.section
      id="date"
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
          <FaCalendarAlt className="text-blue-500 text-3xl mr-2" />
          <h2 className="text-3xl font-semibold text-gray-800">Status por Data</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 mb-8 text-lg"
        >
          Insira uma data para ver o status da COVID-19 no Brasil naquele dia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
          />
          <button
            onClick={handleSearch}
            disabled={!date || isLoading}
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <FaCalendarAlt className="mr-2" />
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

        {data && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <DataTable data={data} columns={columns} />
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default DatePicker;