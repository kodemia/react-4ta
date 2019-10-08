import React, { Component } from 'react'

import FormInput from './FormInput'
import Button from './Button'

class NewPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      date: new Date(),
      readTime: '',
      description: '',
      author: '',
      image: ''
    }
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.props.onSubmit) this.props.onSubmit(this.state)
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form
        className="new-post"
        onSubmit={this.onSubmit.bind(this)}
      >
        <FormInput
          id="title"
          name="title"
          placeholder="El super post de la muerte"
          aria-label="title for the post"
          label="Titulo"
          onChange={this.onChange.bind(this)}
        />

        <FormInput
          id="readTime"
          name="readTime"
          placeholder="666min"
          aria-label="read time"
          label="Tiempo de lectura"
          onChange={this.onChange.bind(this)}
        />

        <FormInput
          id="description"
          name="description"
          placeholder="Este es un post bien perron"
          aria-label="post description"
          label="Descripción"
          onChange={this.onChange.bind(this)}
        />

        <FormInput
          id="author"
          name="author"
          placeholder="Fulanito de Tal"
          aria-label="author name"
          label="Autor"
          onChange={this.onChange.bind(this)}
        />

        <FormInput
          id="image"
          name="image"
          placeholder="https://inserte-meme-aqui.com"
          aria-label="image input"
          label="Imagén"
          onChange={this.onChange.bind(this)}
        />

        <Button
          text="Crear post"
          btnClass="btn-primary"
          type="submit"
        />
      </form>
    )
  }
}

export default NewPost
