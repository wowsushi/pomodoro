import React from 'react'
import { HashRouter, Link, Route } from 'react-router-dom'

import ClockSm from '../components/ClockSm.js'
import Todos from '../components/Todos.js'
import Analytics from '../components/Analytics.js'
import Ringtones from '../components/Ringtones.js'


class Details extends React.Component {

  render() {
    const {
      count,
      taskList,
      match,
      task,
      activating,
      resting,
      handleChange,
      handleSubmit,
      countDown,
      selectTask,
      playSound,
      playing
    } = this.props

    return (
      <main className="details resting">
        <section>
          <nav className="menu">
            <ul>
              <li>
                <Link to="/todos" className={(match.path==='/todos')? 'select-bookMark' : ''}>
                  <i className={match.path==='/todos'? 'select-bookMark material-icons' : 'material-icons'}>list</i>
                  to - do list
                </Link>
              </li>

              <li className="analytics">
                <Link to="/analytics" className={(match.path==='/analytics')? 'select-bookMark' : ''}>
                  <i className={match.path==='/analytics'? 'select-bookMark material-icons' : 'material-icons'}>insert_chart</i>
                  analytics
                </Link>
              </li>

              <li className="ringtones">
                <Link to="/ringtones" className={(match.path==='/ringtones')? 'select-bookMark' : ''}>
                  <i className={match.path==='/ringtones'? 'select-bookMark material-icons' : 'material-icons'}>library_music</i>
                  ringtones
                </Link>
              </li>
            </ul>
          </nav>
          <ClockSm
            count={count}
            taskList={taskList.filter(task => {
              return !task.done
            })}
            changeClockState={this.props.changeClockState}
            activating={activating}
          />
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
          <Route
            path="/analytics"
            render={props => (
              <Analytics resting={resting} />
            )}
          />
          <Route path="/ringtones"
            render={(props) => (
              <Ringtones playing={playing} playSound={playSound}/>
            )}
          />

        </HashRouter>

        <aside>
          <Link to="/">
            <i className="material-icons">
              cancel
            </i>
          </Link>
          <div className="logo">
            <div>pomodoro</div>
          </div>
        </aside>
      </main>
    )
  }
}
export default Details
