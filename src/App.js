import React from 'react';
import './App.css'

import MainPanel from './components/MainPanel.js'

function App() {
  return (
    <div class="container">
      <MainPanel />
      <div class="sub-panel">
        <nav class="nav">
          <ul>
            <li class="to-do-list-folded">
              <i class="material-icons">list</i>
            </li>

            <li class="analytics">
              <i class="material-icons">insert_chart</i>
            </li>

            <li class="ringtones">
              <i class="material-icons">library_music</i>
            </li>
          </ul>
        </nav>
        <div class="logo">
          <div>pomodoro</div>
        </div>
      </div>

      <div class="clock">
        <div class="clock-btn">
          <i class="material-icons">play_arrow</i>
        </div>
        <span class="clock-decoration"></span>
      </div>
    </div>
  );
}

export default App;
