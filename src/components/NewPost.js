import React, { useState } from 'react'

import FormInput from './FormInput'
import Button from './Button'

function NewPost(props) {
  const [state, setState] = useState({
    title: '',
    date: new Date(),
    readTime: '',
    description: '',
    author: '',
    image: ''
  })

  const onSubmit = (event) => {
    event.preventDefault();

    if (props.onSubmit) props.onSubmit(state)
  }

  const onChange =(event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form
      className="new-post"
      onSubmit={onSubmit}
    >
      <FormInput
        id="title"
        name="title"
        placeholder="El super post de la muerte"
        aria-label="title for the post"
        label="Titulo"
        onChange={onChange}
      />

      <FormInput
        id="readTime"
        name="readTime"
        placeholder="666min"
        aria-label="read time"
        label="Tiempo de lectura"
        onChange={onChange}
      />

      <FormInput
        id="description"
        name="description"
        placeholder="Este es un post bien perron"
        aria-label="post description"
        label="Descripción"
        onChange={onChange}
      />

      <FormInput
        id="author"
        name="author"
        placeholder="Fulanito de Tal"
        aria-label="author name"
        label="Autor"
        onChange={onChange}
      />

      <FormInput
        id="image"
        name="image"
        placeholder="https://inserte-meme-aqui.com"
        aria-label="image input"
        label="Imagén"
        onChange={onChange}
      />

      <Button
        text="Crear post"
        btnClass="btn-primary"
        type="submit"
      />
    </form>
  )
}

export default NewPost
