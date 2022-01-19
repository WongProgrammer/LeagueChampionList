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
    <div>
      <div id="top"/>
      <a href="#bot"><img className="pageControls" src="https://raw.githubusercontent.com/esports-bits/lol_images/master/role_lane_icons/ADC.png" alt="bottom lane icon"/></a>
<div className="App">
      <h1>League Champions</h1>
      <List
      className = "list"
        champions ={champions}
      />
      <button onClick={onClickHandler}>{(isClear)? 'Install League' : 'Uninstall League'}</button>
      
    </div>
    <a href="#top"><img className="pageControls" src="https://raw.githubusercontent.com/esports-bits/lol_images/master/role_lane_icons/TOP.png" alt="top lane icon"/></a>
      <div id="bot"/>
    </div>
    
  );
}

export default App;
