import React from 'react';
import './App.css'

function App() {
  return (
    <div class="container">
      <div class="main-panel">
        <div class="add-task">
          <input  type="text" name="task" placeholder="add a new mission..."></input>
          <span>+</span>
        </div>
        <div class="activity-task">
          <span class="circle-lg main-decoration"></span>
          <h3>the first thing to do today</h3>
          <span class="circle-sm sub-decoration"></span>
          <div>25:00</div>
        </div>
        <div class="tasks-group">
          <ul>
            <li>the second thing to do today
              <i class="material-icons">play_circle_outline</i>
            </li>

            <li>the third thing to do today
              <i class="material-icons">play_circle_outline</i>
            </li>

            <li>the fourth thing to do today
              <i class="material-icons">play_circle_outline</i>
            </li>
          </ul>
          <a href="/">more</a>
        </div>
      </div>

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
