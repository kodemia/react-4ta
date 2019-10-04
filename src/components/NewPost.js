import React, { Component } from 'react'

import FormInput from './FormInput'

class NewPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      date: '',
      readTime: '',
      description: '',
      author: '',
      image: ''
    }
  }

  render() {
    return (
      <form>
        <FormInput
          id="title"
          placeholder="El super post de la muerte"
          aria-label="title for the post"
          label="Titulo"
        />

        <FormInput
          id="readTime"
          placeholder="666min"
          aria-label="read time"
          label="Tiempo de lectura"
        />

        <FormInput
          id="description"
          placeholder="Este es un post bien perron"
          aria-label="post description"
          label="Descripción"
        />

        <FormInput
          id="author"
          placeholder="Fulanito de Tal"
          aria-label="author name"
          label="Autor"
        />

        <FormInput
          id="image"
          placeholder="https://inserte-meme-aqui.com"
          aria-label="image input"
          label="Imagén"
        />
      </form>
    )
  }
}

export default NewPost
