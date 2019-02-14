import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  state = {
    posts: [ ]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts') //asynchronised
      .then(res => {
        console.log(res)
        this.setState ({
          posts: res.data.slice(0,10) //to get the first ten request
        })
      }) //.then() run when the get completed
  }
  render() {
    const { posts } = this.state;
    //cycle through the post when there is items in the API
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="Center">No postss yet </div>
    )

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

export default Home
