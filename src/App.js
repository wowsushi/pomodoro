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
      taskList: [
        {
          task: 'example 1',
          id: '1',
          done: false
        }, {
          task: 'example 2',
          id: '2',
          done: true
        }
      ],
      activating: false,
      resting: false,
      count: 15,
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
    if (this.state.count === 0 && !this.state.resting) {
      this.setState({ resting: true, count: 300})
      //chang primary color to blue
      document.documentElement.style.setProperty('--primaryColor', '#00A7FF')

    } else if (this.state.count === 0 && this.state.resting) {
      let newTaskList = {...this.state.taskList}
      newTaskList[0].done = true
      this.setState({ resting: false, activating: false, count: 1500})
      clearInterval(this.interval)
      // change primary color to red
      document.documentElement.style.setProperty('--primaryColor', '#FF4384')

    } else if (this.state.activating) {
      this.setState(state => ({
        count: state.count - 1
      }));
    }
  }

  changeClockState(e) {
    if (this.state.activating) {
      // pause
      clearInterval(this.interval);

    } else {
      // activating
      this.interval = setInterval(() => this.countDown(), 1000);

    }
    this.setState({ activating: !this.state.activating })
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
              taskList={taskList.filter(task => {
                return task.done === false
              })}
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
