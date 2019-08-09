import React from 'react'

import AddTask from './AddTask.js'
import TaskGroup from './TaskGroup.js'

class Todos extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
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
    )
  }
}

export default Todos
