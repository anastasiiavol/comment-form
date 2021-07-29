import React, {Component} from 'react'
import axios from 'axios'

class CommentsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current_page: 0,
      data: [],
      first_page_url: "",
      from: 0,
      last_page: 0,
      last_page_url: "",
      links: [],
      next_page_url: "",
      path: "",
      per_page: 0,
      prev_page_url: null,
      to: 0,
      total: 0,
      errorMsg: ""
    }
  }

  const
  commentsUrl = 'https://jordan.ashton.fashion/api/goods/30/comments'

  componentDidMount() {
    this.loadComments();
  }

  loadComments() {
    axios
      .get(this.commentsUrl)
      .then(response => {
        console.log(response)
        this.commentsUrl = response.data.next_page_url;
        if (this.commentsUrl === response.data.last_page_url){
          document.getElementById("btn").setAttribute("disabled", "true")
        }
        this.setState({
          current_page: response.data.current_page,
          data: this.state.data.concat(response.data.data),
          first_page_url: response.data.first_page_url,
          from: response.data.from,
          last_page: response.data.last_page,
          last_page_url: response.data.last_page_url,
          links: response.data.links,
          next_page_url: response.data.next_page_url,
          path: response.data.path,
          per_page: response.data.per_page,
          prev_page_url: response.data.prev_page_url,
          to: response.data.to,
          total: response.data.total
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
      })
  }

  render() {
    const {data, errorMsg} = this.state
    return (
      <div className={"comments"}>
        <h2 className={"page-title"}>Comments</h2>
        {data.length
          ? data.map(comment =>
            <div key={comment.id} className={"Comments-List"}>
              <div className={"Comments-name"}>Name: {comment.name}</div>
              <div className={"Comments-text"}>Comment text: {comment.text}</div>
            </div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
        <button className={"download-comments-btn"} id={"btn"} onClick={() => this.loadComments()}>Download More</button>
      </div>
    )
  }
}

export default CommentsList
