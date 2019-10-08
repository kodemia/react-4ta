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

    if (this.props.onChange) this.props.onChange(event)
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>
          { this.props.label }
        </label>

        <input
          className="form-control"
          id={this.props.id}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          aria-label={this.props.ariaLabel}
          aria-describedby={this.props.ariaDescribedBy}
          value={this.state.text}
          onChange={this.onChangeValue.bind(this)}
        />
        {
          this.props.help && (
            <small
              id={this.props.id}
              className="form-text text-muted"
            >
              { this.props.help }
            </small>
          )
        }
      </div>
    )
  }
}

export default FormInput
