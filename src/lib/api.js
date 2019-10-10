export default {
  async getPosts() {
    const response = await fetch('http://localhost:8080/posts')
    const jsonBody = await response.json()

    const { posts } = jsonBody.data

    if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

    return posts
  },

  async createPost(post) {
    const response = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })

    const jsonBody = await response.json()

    if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

    return jsonBody.data
  },

  async getById(id) {
    const response = await fetch(`http://localhost:8080/posts/${id}`)
    const jsonBody = await response.json()

    const { post } = jsonBody.data

    if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

    return post
  },

  async login(email, password) {
    const response = await fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

    const jsonBody = await response.json()

    return jsonBody.data
  },

  async validateSession() {
    // users/validate/session
    const response = await fetch('http://localhost:8080/users/validate/session', {
      headers: {
        authorization: sessionStorage.getItem('token')
      }
    })

    if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

    const jsonBody = await response.json()

    return jsonBody.data
  }
}
