import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import PersonForm from './components/PersonForm';
import PersonTable from './components/PersonTable';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem('peopleData');
    if (stored) {
      setPeople(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('peopleData', JSON.stringify(people));
  }, [people]);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const addPerson = (person) => {
    setPeople(prev => [...prev, person]);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const retrieveData = () => {
    const stored = localStorage.getItem('peopleData');
    if (stored) {
      setPeople(JSON.parse(stored));
    } else {
      alert('No saved data found!');
    }
  };

  return (
    <div className="app-container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="controls">
        <button className="btn" onClick={scrollToForm}>Add New Person</button>
        <button className="btn" onClick={retrieveData}>Retrieve Information</button>
      </div>
      <div className="form-table-container">
        <div ref={formRef}>
          <PersonForm addPerson={addPerson} />
        </div>
        <PersonTable people={people} />
      </div>
    </div>
  );
}

export default App;