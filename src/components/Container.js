import React from 'react'

import AddTask from './AddTask.js'
import TaskGroup from './TaskGroup.js'
import Clock from './Clock.js'


function changeTheme(state) {
  const clockWrapper = document.querySelector('.clock-wrapper')
  const clockMain = document.querySelector('.clock-main')
  const clockBtn = document.querySelector('.clock-btn')
  const materialIcons = document.querySelector('.clock-btn > .material-icons')
  const clockDecoration = document.querySelector('.clock-decoration')

  clockWrapper.classList.toggle('sub-theme') 
  clockMain.classList.toggle('main-theme')
  clockBtn.classList.toggle('sub-theme')
  materialIcons.innerHTML = 'pause'
  // materialIcons.classList.toggle('main-theme')
  clockDecoration.classList.toggle('sub-theme')
}

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      task: '',
      taskList: [],
      activiting: false,
      resting: false,
      countDown: 1500
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeClockState = this.changeClockState.bind(this)
  }

  handleChange(e) {
    const { value } = e.target
    this.setState({
      task: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.task) return
    
    const newTask = {
      task: this.state.task,
      id: Date.now()
    }

    this.setState(prevState => ({
      taskList: prevState.taskList.concat(newTask),
      task: '',
      id: ''
    }))
  }

  changeClockState(e) {
    if (this.state.activiting || this.state.resting) {
      // pause
    } else {
      // activiting
      changeTheme()
    }
  }

  render() {
    let showActivityTask = []
    if (this.state.taskList.length > 0) {
      showActivityTask.push(
        <div class="activity-task" key={Date.now()}>
          <span class="circle-lg main-decoration"></span>
          <h3>{this.state.taskList[0].task}</h3>
          <span class="circle-sm sub-decoration"></span>
          <div>25:00</div>
        </div>
      )
    } else {
      showActivityTask.push(
        <div class="activity-task" key={Date.now()}>
          <h3>No task? Add one.</h3>
        </div>
      )
    } 

  return (
    <div class="container">
      <div class="main-panel">
        <AddTask 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} 
          changeClockState={this.changeClockState}
          task={this.state.task}
        />
        {showActivityTask}
        <TaskGroup 
          taskList={this.state.taskList}
        />
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
      <Clock changeClockState={this.changeClockState}/>
    </div>
  )}
}

export default Container