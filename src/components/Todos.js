import React from 'react'

import AddTask from './AddTask.js'
import TaskGroup from './TaskGroup.js'

const Todos = props => {
  const {
    handleChange,
    handleSubmit,
    changeClockState,
    task,
    taskList,
    selectTask,
  } = props
  return (
      <section className="tasks">
      <AddTask
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        changeClockState={changeClockState}
        task={task}
      />
      <div className="todo-list">
      <h2>to - do</h2>
        <TaskGroup
          taskList={taskList.filter(task => {
            return !task.done
          })}
          selectTask={selectTask}
          page="todos"
        />
      </div>
      <div className="done-list">
        <h2>done</h2>
        <TaskGroup
          taskList={taskList.filter(task => {
            return task.done
          })}
          page="todos"
        />
      </div>
    </section>
  )
}

export default Todos
