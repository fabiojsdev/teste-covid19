import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { getStateStatus, StateData } from '../services/api';
import DataTable from './DataTable';

const StateSelector: React.FC = () => {
  const [state, setState] = useState<string>('');
  const [data, setData] = useState<StateData[] | null>(null);

  const handleSearch = async () => {
    if (state) {
      const result = await getStateStatus(state);
      if (result) {
        setData([result]); 
      } else {
        setData(null); 
      }
    }
  };

  const columns = ['state', 'cases', 'deaths', 'suspects']; // Colunas da tabela

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        <FaSearch className="mr-2 text-blue-500" />
        Status por Estado
      </h2>
      <p className="text-gray-600 mb-4">
        Selecione um estado brasileiro para ver o status atual da COVID-19.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="p-2 border rounded-md flex-1"
        >
          <option value="">Selecione um estado</option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </select>
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <FaSearch className="mr-2" />
          Buscar
        </button>
      </div>
      {data && (
        <div className="mt-6">
          <DataTable data={data} columns={columns} />
        </div>
      )}
    </div>
  );
};

export default StateSelector;