import React from 'react'

const ClockSm = ({ count, taskList, changeClockState, activating }) => {
  return (
    <div className="clockSm-main">
      <div className="clockSm-btn">
        <div className="clockSm-btn-inner">
          <i className="material-icons clock-icon"
              onClick={changeClockState}
          >{activating? "pause" : "play_arrow"}
          </i>
        </div>
      </div>
      <div className="content">
        <h1>{ Math.floor(count / 60).toString().padStart(2, '0') }
                :{ (count % 60).toString().padStart(2, '0')}
        </h1>
        <p>{(taskList[0])? taskList[0].task : 'No task'}</p>
      </div>
    </div>
  )
}

export default ClockSm
