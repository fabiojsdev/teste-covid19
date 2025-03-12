import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StateSelector from './components/StateSelector';
import DatePicker from './components/DatePicker';
import CountrySearch from './components/CountrySearch';
import Form from './components/Form';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="states">
        <StateSelector />
      </section>
      <section id="date">
        <DatePicker />
      </section>
      <section id="countries">
        <CountrySearch />
      </section>
      <section id="form">
        <Form />
      </section>
    </div>
  );
};

export default App;