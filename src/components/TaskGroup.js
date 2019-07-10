import React from 'react'

class TaskGroup extends React.Component {
  render() {
    let { taskList }  = this.props
    let list = []
    let showMore = ''

    if (taskList.length > 4 ) {
      taskList = taskList.slice(1, 5)
      showMore = <a href="/">more</a>
    } 

    for (let i=1; i<taskList.length; i++) {
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