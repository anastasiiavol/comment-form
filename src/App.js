import React, { Component } from 'react'
import './App.css'
import CommentsList from './Components/CommentsList'
import PostCommentForm from './Components/CommentsPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostCommentForm />
       <CommentsList />
      </div>
    )
  }
}

export default App
