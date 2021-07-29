import React, {Component} from 'react'
import axios from 'axios'

class PostCommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      text: ''
    }
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('https://jordan.ashton.fashion/api/goods/30/comments', this.state)
      .then(response => {
        console.log(response)
        alert("Comment added")
      })
      .catch(error => {
        console.log(error)
      })
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const {name, text} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input className={"form-input form-input-name"}
                   type="text"
                   name="name"
                   value={name}
                   onChange={this.changeHandler}
                   required={true}
                   placeholder="Your name:"
            />
          </div>
          <div>
            <input className={"form-input form-input-text"}

                   type="text"
                   name="text"
                   value={text}
                   onChange={this.changeHandler}
                   required={true}
                   placeholder="Type here your comment:"
            />
          </div>
          <button type="submit" className={"form-bnt-submit"}>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostCommentForm
