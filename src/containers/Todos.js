import React from 'react'
import { Link } from 'react-router-dom'

import AddTask from '../components/AddTask.js'
import TaskGroup from '../components/TaskGroup.js'
import ClockSm from '../components/ClockSm.js'

class Todos extends React.Component {

  render() {
    const { count, taskList } = this.props

    return (
      <main className="todos">
        <section>
          <nav class="menu">
            <ul>
              <li class="to-do-list-folded">
                <Link to="/todos">
                  <i class="material-icons">list</i>
                  to - do list
                </Link>
              </li>

              <li class="analytics">
                <Link to="/analytics">
                  <i class="material-icons">insert_chart</i>
                  analytics
                </Link>
              </li>

              <li class="ringtones">
                <Link to="/ringtones">
                  <i class="material-icons">library_music</i>
                  ringtones
                </Link>
              </li>
            </ul>
          </nav>
          <ClockSm count={count} taskList={taskList} changeClockState={this.props.changeClockState}/>
        </section>
        <section class="tasks">
          <AddTask
            handleChange={this.props.handleChange}
            handleSubmit={this.props.handleSubmit}
            changeClockState={this.props.changeClockState}
            task={this.props.task}
          />
          <div className="todo-list">
          <h2>to - do
               <i class="material-icons">
                arrow_drop_up
              </i>
          </h2>
            <TaskGroup
              taskList={this.props.taskList}
              selectTask={this.props.selectTask}
              page="todos"
            />
          </div>
          <div className="done-list">
            <h2>
              done
              <i class="material-icons">
                arrow_drop_down
              </i>
            </h2>
            <TaskGroup
              taskList={this.props.taskList}
              selectTask={this.props.selectTask}
              page="todos"
            />
          </div>
        </section>
        <aside>
          <Link to="/">
            <i class="material-icons">
              cancel
            </i>
          </Link>
          <div class="logo">
            <div>pomodoro</div>
          </div>
        </aside>
      </main>
    )
  }
}
export default Todos
