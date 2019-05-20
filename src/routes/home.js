import React, { Component } from 'react';
import SubRedditItem from '../components/SubRedditItem';
import axios from 'axios'

export default class Home extends Component {
  state = {
    data: [],
    reddit:""
  }
  

  componentDidMount() {
    axios
      .get('https://www.reddit.com/r/aww.json')
      .then(res => {
        const data = res.data.data.children;
        const reddit = res.data.data.children[0].data.subreddit;
        this.setState({ data, reddit });
        sessionStorage.setItem("reddit", reddit) 
      }
    )
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="layout">
        <div className="home-container">
          <SubRedditItem state={this.state.data} reddit={this.state.reddit}/>
        </div>
      </div>
    )
  }
}



