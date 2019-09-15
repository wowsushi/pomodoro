import React from 'react'
import { HashRouter, Link } from 'react-router-dom'

import AddTask from '../components/AddTask.js'
import TaskGroup from '../components/TaskGroup.js'
import Clock from '../components/Clock.js'

class Home extends React.Component {
  render() {
    const { taskList, count, activating, resting } = this.props

    let showActivityTask = []
    if (taskList.length > 0) {
      showActivityTask.push(
        <div className="activity-task" key={Date.now()}>
          <span className="circle-lg main-decoration"></span>
          <h3>{taskList[0].task}</h3>
          <span className="circle-sm sub-decoration"></span>
          <div>{ Math.floor(count / 60).toString().padStart(2, '0') }
                :{ (count % 60).toString().padStart(2, '0')}
          </div>
        </div>
      )
      this.clock =
        <Clock
          changeClockState={this.props.changeClockState}
          activating={activating}
        />
    } else {
      showActivityTask.push(
        <div className="activity-task" key={Date.now()}>
          <h3>No task? Add one.</h3>
        </div>
      )

      this.clock = ""
    }

  return (
    <div className={resting? "home resting" : "home"}>
      <div className="main-panel">
        <AddTask
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          changeClockState={this.props.changeClockState}
          task={this.props.task}
        />
        {showActivityTask}
        <TaskGroup
          taskList={taskList.filter(task => {
            return !task.done
          })}
          selectTask={this.props.selectTask}
          page='home'
        />
      </div>
      <div className="sub-panel">
        <HashRouter>
          <nav className="nav">
            <ul>
              <Link to="/todos">
                <li className="to-do-list-folded">
                    <i className="material-icons">list</i>
                </li>
             </Link>

              <Link to="/analytics">
                <li className="analytics">
                    <i className="material-icons">insert_chart</i>
                </li>
              </Link>

              <Link to="/ringtones">
                <li className="ringtones">
                    <i className="material-icons">library_music</i>
                </li>
              </Link>
            </ul>
          </nav>
        </HashRouter>
        <div className="logo">
          <div>pomodoro</div>
        </div>
      </div>
      {this.clock}
    </div>
  )}
}

export default Home;
