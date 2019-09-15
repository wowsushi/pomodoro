import React from 'react'

class Clock extends React.Component {
  render () {
    const { activating } = this.props

    return (
    <div className={activating? "clock-wrapper activating" : "clock-wrapper"}>
      <div className="clock-main">
        <div className="clock-btn" onClick={this.props.changeClockState}>
          <i className="material-icons clock-icon">{activating? "pause" : "play_arrow"}</i>
          <span className="clock-decoration"></span>
        </div>
      </div>
    </div>
    )
  }
}
export default Clock
