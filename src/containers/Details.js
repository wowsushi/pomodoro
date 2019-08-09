import React from 'react'
import { HashRouter, Link, Route } from 'react-router-dom'

import ClockSm from '../components/ClockSm.js'
import Todos from '../components/Todos.js'
import Analytics from '../components/Analytics.js'
import Ringtones from '../components/Ringtones.js'


class Details extends React.Component {

  render() {
    const { count, taskList, match, task, activating,resting, handleChange, handleSubmit, countDown,selectTask } = this.props

    return (
      <main className="details">
        <section>
          <nav class="menu">
            <ul>
              <li>
                <Link to="/todos" class={(match.path==='/todos')? 'select-bookMark' : ''}>
                  <i class={match.path==='/todos'? 'select-bookMark material-icons' : 'material-icons'}>list</i>
                  to - do list
                </Link>
              </li>

              <li class="analytics">
                <Link to="/analytics" class={(match.path==='/analytics')? 'select-bookMark' : ''}>
                  <i class={match.path==='/analytics'? 'select-bookMark material-icons' : 'material-icons'}>insert_chart</i>
                  analytics
                </Link>
              </li>

              <li class="ringtones">
                <Link to="/ringtones" class={(match.path==='/ringtones')? 'select-bookMark' : ''}>
                  <i class={match.path==='/ringtones'? 'select-bookMark material-icons' : 'material-icons'}>library_music</i>
                  ringtones
                </Link>
              </li>
            </ul>
          </nav>
          <ClockSm count={count} taskList={taskList} changeClockState={this.props.changeClockState}/>
        </section>
        <HashRouter>
          <Route
            path="/todos"
            render={(props) => (
              <Todos
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                countDown={countDown}
                selectTask={selectTask}
                task={task}
                taskList={taskList}
                activating={activating}
                resting={resting}
                count={count}

              />
            )}
          />
          <Route path="/analytics"
            component={Analytics}
          />
          <Route path="/ringtones"
           component={Ringtones}
          />

        </HashRouter>

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
export default Details
