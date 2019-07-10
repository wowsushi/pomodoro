import React from 'react'

import AddTask from './AddTask.js'
import TaskGroup from './TaskGroup.js'

class MainPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      task: '',
      taskList: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  render() {
    let showActivityTask = []
    if (this.state.taskList.length > 0) {
      showActivityTask.push(
        <div class="activity-task">
          <span class="circle-lg main-decoration"></span>
          <h3>the first thing to do today</h3>
          <span class="circle-sm sub-decoration"></span>
          <div>25:00</div>
        </div>
      )
    } else {
      showActivityTask.push(
        <div class="activity-task">
          <h3>No task. Add one?</h3>
        </div>
      )
    } 

    return (
    <div class="main-panel">
      <AddTask 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} 
        task={this.state.task}
      />
      {showActivityTask}
      <TaskGroup 
        taskList={this.state.taskList}
      />
    </div>
    )
  }
}

export default MainPanel