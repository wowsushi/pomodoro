import React from 'react'

class Clock extends React.Component {

  render () {
    return (
    <div class="clock-wrapper">
      <div class="clock-main">
        <div class="clock-btn" onClick={this.props.changeClockState}>
          <i class="material-icons">play_arrow</i>
          <span class="clock-decoration"></span>
        </div>
      </div>
    </div>
    )
  }
}
export default Clock
