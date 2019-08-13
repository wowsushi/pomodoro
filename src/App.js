import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import './App.css';
import Home from './containers/Home.js'
import Details from './containers/Details.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      task: '',
      taskList: [],
      activating: false,
      resting: false,
      count: 1500,
      playing: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeClockState = this.changeClockState.bind(this)
    this.selectTask = this.selectTask.bind(this)
    this.playSound = this.playSound.bind(this)
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
      id: Date.now(),
      done: false
    }

    this.setState(prevState => ({
      taskList: prevState.taskList.concat(newTask),
      task: '',
      id: '',
      done: ''
    }))
  }

  countDown() {
    this.setState(state => ({
      count: state.count - 1
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
    this.changeTheme()
  }

  selectTask(id, e) {
    let { taskList } = this.state

    taskList.forEach((task, index) => {
      if (task.id === id) {
        taskList.unshift(...taskList.splice(index, 1))

        this.setState({ count: 1500 })

        if (this.state.activating) {
          this.changeClockState(e)
        }
      }
    })
  }

  changeTheme(state) {
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
    console.log('changed')
  }

  playSound(radio, e) {
    this.setState({
      playing: radio
    })
  }

  render () {
    const { task,
            taskList,
            activating,
            resting,
            count,
            playing
         } = this.state

    return (
      <HashRouter>
        <Route exact
          path="/"
          render={(props) => (
            <Home
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              countDown={this.countDown}
              changeClockState={this.changeClockState}
              selectTask={this.selectTask}
              task={task}
              taskList={taskList}
              activating={activating}
              resting={resting}
              count={count}
              match={props.match}
            />
          )}

        />
        <Route
          path="/todos"
          render={(props) => (
            <Details
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              countDown={this.countDown}
              changeClockState={this.changeClockState}
              selectTask={this.selectTask}
              task={task}
              taskList={taskList}
              activating={activating}
              resting={resting}
              count={count}
              match={props.match}
            />
          )}
        />
        <Route
          path="/analytics"
          render={(props) => (
            <Details
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              countDown={this.countDown}
              changeClockState={this.changeClockState}
              selectTask={this.selectTask}
              task={task}
              taskList={taskList}
              activating={activating}
              resting={resting}
              count={count}
              match={props.match}
            />
          )}
        />
        <Route
          path="/ringtones"
          render={(props) => (
            <Details
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              countDown={this.countDown}
              changeClockState={this.changeClockState}
              selectTask={this.selectTask}
              playSound={this.playSound}
              playing={playing}
              task={task}
              taskList={taskList}
              activating={activating}
              resting={resting}
              count={count}
              match={props.match}
            />
          )}
        />
      </HashRouter>
    )
  }
}

export default App;
