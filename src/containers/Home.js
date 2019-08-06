import React from 'react'
import { HashRouter, Link } from 'react-router-dom'

import AddTask from '../components/AddTask.js'
import TaskGroup from '../components/TaskGroup.js'
import Clock from '../components/Clock.js'

function changeTheme(state) {
  const clockWrapper = document.querySelector('.clock-wrapper')
  const clockMain = document.querySelector('.clock-main')
  const clockBtn = document.querySelector('.clock-btn')
  const materialIcons = document.querySelector('.clock-btn > .material-icons')
  const clockDecoration = document.querySelector('.clock-decoration')

  clockWrapper.classList.toggle('sub-theme')
  clockMain.classList.toggle('main-theme')
  clockBtn.classList.toggle('sub-theme')
  materialIcons.innerHTML =  (materialIcons.innerHTML === 'play_arrow') ? 'pause' : 'play_arrow'
  materialIcons.classList.toggle('main-theme-font')
  clockDecoration.classList.toggle('sub-theme')
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      task: '',
      taskList: [],
      activating: false,
      resting: false,
      countDown: 1500
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeClockState = this.changeClockState.bind(this)
    this.selectTask = this.selectTask.bind(this)
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

  countDown() {
    this.setState(state => ({
      countDown: state.countDown - 1
    }));
  }

  changeClockState(e) {

    if (this.state.activating || this.state.resting) {
      // pause
      clearInterval(this.interval);

    } else {
      // activating
      this.interval = setInterval(() => this.countDown(), 1000);

    }
    this.setState({ activating: !this.state.activating })
    changeTheme()
  }

  selectTask(id, e) {
    let { taskList } = this.state

    taskList.forEach((task, index) => {
      if (task.id === id) {
        taskList.unshift(...taskList.splice(index, 1))

        this.setState({ countDown: 1500 })

        if (this.state.activating) {
          this.changeClockState(e)
        }
      }
    })
  }

  render() {
    const { taskList, countDown } = this.state

    let showActivityTask = []
    if (taskList.length > 0) {
      showActivityTask.push(
        <div class="activity-task" key={Date.now()}>
          <span class="circle-lg main-decoration"></span>
          <h3>{taskList[0].task}</h3>
          <span class="circle-sm sub-decoration"></span>
          <div>{ Math.floor(countDown / 60).toString().padStart(2, '0') }
                :{ (countDown % 60).toString().padStart(2, '0')}
          </div>
        </div>
      )
      this.clock = <Clock changeClockState={this.changeClockState}/>
    } else {
      showActivityTask.push(
        <div class="activity-task" key={Date.now()}>
          <h3>No task? Add one.</h3>
        </div>
      )

      this.clock = ""
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
          taskList={taskList}
          selectTask={this.selectTask}
        />
      </div>
      <div class="sub-panel">
        <HashRouter>
          <nav class="nav">
            <ul>
              <li class="to-do-list-folded">
                <Link to="/todos">
                  <i class="material-icons">list</i>
                </Link>
              </li>

              <li class="analytics">
                <Link to="/analytics">
                  <i class="material-icons">insert_chart</i>
                </Link>
              </li>

              <li class="ringtones">
                <Link to="/ringtones">
                  <i class="material-icons">library_music</i>
                </Link>
              </li>
            </ul>
          </nav>
        </HashRouter>
        <div class="logo">
          <div>pomodoro</div>
        </div>
      </div>
      {this.clock}
    </div>
  )}
}

export default Home;
