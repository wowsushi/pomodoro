import React from 'react'
import { Link } from 'react-router-dom'

class TaskGroup extends React.Component {
  render() {
    let { taskList, selectTask, page }  = this.props
    let list = []
    let showMore = ''

    switch (page) {
      case 'home':
        if (taskList.length > 1 ) {
          showMore = (taskList.length > 4)? <Link to="todos">more</Link> : ''

          taskList = taskList.slice(1, 4)
          for (let i=0; i<taskList.length; i++) {
            list.push(
              <li key={taskList[i].id} onClick={selectTask.bind(this, taskList[i].id, this.e )}>{taskList[i].task}
                <i className="material-icons">play_circle_outline</i>
              </li>
            )
          }
        }
        break
      case 'todos':
        for (let i=0; i<taskList.length; i++) {
          if (!taskList[i].done) {
            list.push(
              <li key={taskList[i].id} onClick={selectTask.bind(this, taskList[i].id, this.e )}>{taskList[i].task}
                <i className="material-icons">play_circle_outline</i>
              </li>
            )
          } else {
            list.push(
              <li key={taskList[i].id}>{taskList[i].task}</li>
            )
          }
        }
      break
      default:
        console.log('error')
    }

    return (
      <div className={`tasks-group tasks-group-${page}`}>
        <ul>
          {list}
        </ul>
          {showMore}
      </div>
    )
  }
}

export default TaskGroup
