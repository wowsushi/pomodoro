import React from 'react'
import { Link } from 'react-router-dom'

class TaskGroup extends React.Component {
  constructor(props) {
    super(props)
  }

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
                <i class="material-icons">play_circle_outline</i>
              </li>
            )
          }
        }
        break
      case 'todos':
        for (let i=0; i<taskList.length; i++) {
          list.push(
            <li key={taskList[i].id} onClick={selectTask.bind(this, taskList[i].id, this.e )}>{taskList[i].task}
              <i class="material-icons">play_circle_outline</i>
            </li>
          )
        }
      break
      default:
        console.log('error')
    }

    return (
      <div class={`tasks-group tasks-group-${page}`}>
        <ul>
          {list}
        </ul>
          {showMore}
      </div>
    )
  }
}

export default TaskGroup
