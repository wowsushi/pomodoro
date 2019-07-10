import React from 'react'

class AddTask extends React.Component {
  render() {
    return (
      <form class="add-task" onSubmit={this.props.handleSubmit}>
        <input  
          type="text" 
          name="task" 
          placeholder="add a new mission..." 
          value={this.props.task} 
          onChange={this.props.handleChange}>
        </input>
        <button type="submit" name="task">+</button>
      </form>
    )
  }
}

export default AddTask;