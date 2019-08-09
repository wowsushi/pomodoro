import React from 'react'

class ClockSm extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { count, taskList } = this.props

    return (
      <div class="clockSm-main">
        <div class="clockSm-btn">
          <div class="clockSm-btn-inner">
            <i class="material-icons clock-icon">play_arrow</i>
          </div>
        </div>
        <div class="content">
          <h1>{ Math.floor(count / 60).toString().padStart(2, '0') }
                  :{ (count % 60).toString().padStart(2, '0')}
          </h1>
          <p>{(taskList[0])? taskList[0].task : ''}</p>
        </div>
      </div>
    )
  }
}
export default ClockSm
