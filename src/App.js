import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Index from './views/Index'
import NewPost from './views/NewPost'
import PostDetail from './views/PostDetail'

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/'
          component={Index}
          exact
        />
        <Route
          path='/new-post'
          component={NewPost}
          exact
        />
        <Route
          path='/post/:id'
          component={PostDetail}
          exact
        />
      </Switch>
    </Router>
  )
}

export default App
