import React from 'react';
import ContactList from './components/ContactList';
import './styles/global.scss';

const App = () => {
  return (
    <div className="app-container">
      <h1>Contact List</h1>
      <ContactList />
    </div>
  );
};

export default App;
