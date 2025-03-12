import React from 'react';
import StateSelector from './components/StateSelector';
import DatePicker from './components/DatePicker';
import CountrySearch from './components/CountrySearch';
import Form from './components/Form';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Painel de Monitoramento COVID-19
      </h1>
      <StateSelector />
      <DatePicker />
      <CountrySearch />
      <Form />
    </div>
  );
};

export default App;