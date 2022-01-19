import './App.css';
import List from './components/List.js';
import data from './data.js';
import React, { useState } from 'react';
function App() {
  const [champions, setChampions] = useState(data);
  const [isClear, setIsClear] = useState(false);
  const [search, setSearch] = useState('');

  function onClickHandler() {
    if (isClear) {
      setChampions(data);
    } else {
      setChampions([]);
    }
    setIsClear(!isClear);
  };

  function onChangeHandler(e) {
    e.preventDefault();
    setSearch(e.target.value);
   // champions.filter(champion => champion.name.toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <div>
      <div id="top" />
      <input className="search"type="text" onChange={onChangeHandler} placeholder="Search Champion" />
      <a href="#bot">
        <img className="pageControls" src="https://raw.githubusercontent.com/esports-bits/lol_images/master/role_lane_icons/ADC.png" alt="bottom lane icon" />
      </a>
      <h1>League Champions</h1>
      <div className="App">
        
        <List
          className="list"
          champions={champions.filter(champion => champion.name.toLowerCase().includes(search.toLowerCase()))}
        />
        

      </div>
      <a href="#top">
        <img className="pageControls" src="https://raw.githubusercontent.com/esports-bits/lol_images/master/role_lane_icons/TOP.png" alt="top lane icon" />
        </a>
        <button onClick={onClickHandler}>{(isClear) ? 'Install League' : 'Uninstall League'}</button>
      <div id="bot" />
    </div>

  );
}

export default App;
