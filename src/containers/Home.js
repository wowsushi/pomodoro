import React from 'react'
import { HashRouter, Link } from 'react-router-dom'

import AddTask from '../components/AddTask.js'
import TaskGroup from '../components/TaskGroup.js'
import Clock from '../components/Clock.js'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }

  render() {
    console.log(this.props)
    const { taskList, count } = this.props

    let showActivityTask = []
    if (taskList.length > 0) {
      showActivityTask.push(
        <div class="activity-task" key={Date.now()}>
          <span class="circle-lg main-decoration"></span>
          <h3>{taskList[0].task}</h3>
          <span class="circle-sm sub-decoration"></span>
          <div>{ Math.floor(count / 60).toString().padStart(2, '0') }
                :{ (count % 60).toString().padStart(2, '0')}
          </div>
        </div>
      )
      this.clock = <Clock changeClockState={this.props.changeClockState}/>
    } else {
      showActivityTask.push(
        <div class="activity-task" key={Date.now()}>
          <h3>No task? Add one.</h3>
        </div>
      )

      this.clock = ""
    }

  return (
    <div class="home">
      <div class="main-panel">
        <AddTask
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          changeClockState={this.props.changeClockState}
          task={this.props.task}
        />
        {showActivityTask}
        <TaskGroup
          taskList={taskList}
          selectTask={this.props.selectTask}
          page='home'
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
