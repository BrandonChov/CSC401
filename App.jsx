import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [Do, setDo] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addDos = () => {
    if (inputValue.trim()) {
      const newDos = {
        text: inputValue,//whatever is typed
        completed: false,//???
      };
      setDo([...Do, newDos]);//adds to the list of the do
      setInputValue(''); //resets the input
    }
  };

  const toggleDosCompletion = (index) => {
    const updatedDo = Do.map((Dos, i) => 
      i === index ? { ...Dos, completed: !Dos.completed } : Dos
    );
    setDo(updatedDo);
  };

  return (
    <div className="App">
      <h1>Do and Done</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What to Do..."//inner text of the box
        />
        <button onClick={addDos}>Do</button>
      </div>
      <ul>
        {Do.map((Dos, index) => (
          <li key={index} style={{ textDecoration: Dos.completed ? 'line-through' : 'none' }}>
            {Dos.text}
            <button onClick={() => toggleDosCompletion(index)}>
              {Dos.completed ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
