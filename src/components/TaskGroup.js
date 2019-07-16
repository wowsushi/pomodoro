import React from 'react'

class TaskGroup extends React.Component {
  render() {
    let { taskList }  = this.props
    let list = []
    let showMore = ''

    if (taskList.length > 1 ) {
      showMore = (taskList.length > 4)? <a href="/">more</a> : ''

      taskList = taskList.slice(1, 4)
      for (let i=0; i<taskList.length; i++) {
       list.push(
          <li key={taskList[i].id}>{taskList[i].task}
            <i class="material-icons">play_circle_outline</i>
          </li>     
        )
      }
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