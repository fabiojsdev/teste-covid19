import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { getStateStatus, StateData } from '../services/api';
import DataTable, { Column } from './DataTable'; // Importe o tipo Column corretamente

const StateSelector: React.FC = () => {
  const [state, setState] = useState<string>('');
  const [data, setData] = useState<StateData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Defina as colunas corretamente
  const columns: Column[] = [
    { Header: 'Estado', accessor: 'state' },
    { Header: 'Casos', accessor: 'cases' },
    { Header: 'Mortes', accessor: 'deaths' },
    { Header: 'Suspeitos', accessor: 'suspects' },
  ];

  const handleSearch = async () => {
    if (!state) return;

    setIsLoading(true);
    setError(null);
    try {
      const result = await getStateStatus(state);
      console.log('Dados retornados pela API:', result); // Log para depuração
      setIsLoading(false);

      if (result) {
        setData(result);
      } else {
        setData(null);
        setError('Nenhum dado encontrado para este estado.');
      }
    } catch (err) {
      setIsLoading(false);
      setError('Erro ao buscar os dados. Tente novamente.');
      console.error('Erro ao buscar dados:', err); // Log para depuração
    }
  };

  return (
    <motion.section
      id="states"
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
          <FaSearch className="text-blue-500 text-3xl mr-2" />
          <h2 className="text-3xl font-semibold text-gray-800">Status por Estado</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 mb-8 text-lg"
        >
          Selecione um estado brasileiro para ver o status atual da COVID-19.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
          >
            <option value="">Selecione um estado</option>
            {[
              'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
              'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
              'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
            ].map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>

          <button
            onClick={handleSearch}
            disabled={!state || isLoading}
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <FaSearch className="mr-2" />
                Buscar
              </>
            )}
          </button>
        </motion.div>

        {/* Mensagem de erro */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {/* Tabela de dados */}
        {data && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <DataTable data={[data]} columns={columns} /> {/* Passa o dado como array */}
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default StateSelector;