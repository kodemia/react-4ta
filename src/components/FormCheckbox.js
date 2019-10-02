import React, { Component } from 'react'

class FormCheckbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  toggleActive() {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={this.state.isActive}
          id={this.props.id}
          onChange={this.toggleActive.bind(this)}
        />
        { this.state.isActive && (
          <label
            className="form-check-label text-light"
            for={this.props.id}
          >
            { this.props.label }
          </label>
        )}
      </div>
    )
  }
}

export default FormCheckbox
