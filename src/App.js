import './App.css';
import List from './components/List.js';
import data from './data.js';
import React, { useState } from 'react';
function App() {
  const [champions, setChampions] = useState(data);
  const [isClear, setIsClear] = useState(false);

 function onClickHandler() {
    if(isClear) {
      setChampions(data);
    } else {
      setChampions([]);
    }
    setIsClear(!isClear);
  };
  return (
    <div className="App">
      <h1>League Champions</h1>
      <List
      className = "list"
        champions ={champions}
      />
      <button onClick={onClickHandler}>{(isClear)? 'Install League' : 'Uninstall League'}</button>
    </div>
  );
}

export default App;
