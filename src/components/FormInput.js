import React, { Component } from 'react'

class FormInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  onChangeValue(event) {
    const text = event.target.value

    this.setState({ text })
  }

  render() {
    return (
      <input
        className="form-control mr-sm-2"
        type={this.props.type}
        placeholder={this.props.placeholder}
        aria-label={this.props.ariaLabel}
        value={this.state.text}
        onChange={this.onChangeValue.bind(this)}
      />
    )
  }
}

export default FormInput
