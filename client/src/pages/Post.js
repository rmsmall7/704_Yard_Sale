import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea } from "../components/Form";

class Post extends Component {
  state = {
    posts: [],
    time: "",
    date: "",
    location: "",
    items: ""
  };

 

  // loadPosts = () => {
  //   API.getPosts()
  //     .then(res => {
  //       console.log(res.data)
  //      // this.setState({ posts: res.data, time: "", date: "", location: "", items: "" })
  //     }
  //     )
  //     .catch(err => console.log(err));
  // };

  deletePost = id => {
    API.deletePost(id)
      .then(res => this.getPost())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.time && this.state.date && this.state.location) {
      API.addPost({
        time: this.state.time,
        location: this.state.location,
        date: this.state.date,
        items: this.state.items
      })
        .then(res => this.getPost())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form onSubmit={this.handleFormSubmit}>
              <Input
                value={this.state.time}
                onChange={this.handleInputChange}
                name="time"
                placeholder="Time (required)"
              />
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (required)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (required)"
              />
              <TextArea
                value={this.state.items}
                onChange={this.handleInputChange}
                name="items"
                placeholder="Items (Optional)"
              />
            <input type="submit" value="Submit" />
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              
            </Jumbotron>
            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong>
                        {post.time}  {post.date} at {post.location}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePost(post._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Post;
