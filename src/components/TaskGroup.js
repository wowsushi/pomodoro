import React from 'react'

class TaskGroup extends React.Component {
  render() {
    let { taskList }  = this.props
    let list = []
    let showMore = ''

    if (taskList.length > 3) {
      taskList = taskList.slice(0, 3)
      showMore = <a href="/">more</a>
    } 

    for (let i=0; i<taskList.length; i++) {
     list.push(
        <li key={taskList[i].id}>{taskList[i].task}
          <i class="material-icons">play_circle_outline</i>
        </li>     
      )
    }
  
    return (
      <div class="tasks-group">
        <ul>
          {list}
        </ul>
        {showMore}
      </div>
    )
  }
}

export default TaskGroup