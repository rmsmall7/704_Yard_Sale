import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Yards extends Component {
  state = {
    yardsales: [],
    title: "",
    location: "",
    startTime: "",
    endTime: "",
    picture: "",
    date: ""
  };

  componentDidMount() {
    this.loadYards();
  }

  loadYards = () => {
    API.getYards()
      .then(res =>
        this.setState({ yards: res.data, title: "", location: "", startTime: "", endTime: "", picture: "", date: ""  })
      )
      .catch(err => console.log(err));
  };

  deleteYard = id => {
    API.deleteYard(id)
      .then(res => this.loadYards())
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
    if (this.state.title && this.state.location) {
      API.saveYard({
        title: this.state.title,
        location: this.state.location,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        picture: this.state.picture,
        date: this.state.date
      })
        .then(res => this.loadYards())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Yard Sales do I like??</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (required)"
              />
              <TextArea
                value={this.state.startTime}
                onChange={this.handleInputChange}
                name="startTime"
                placeholder="StartTime (Optional)"
              />
              <TextArea
                value={this.state.endTime}
                onChange={this.handleInputChange}
                name="endTime"
                placeholder="EndTime (Optional)"
              />
              <TextArea
                value={this.state.picture}
                onChange={this.handleInputChange}
                name="picture"
                placeholder="Picture (Optional)"
              />
              <TextArea
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Yard Sale
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Yards Sales on my list!!</h1>
            </Jumbotron>
            {this.state.yards.length ? (
              <List>
                {this.state.yards.map(book => (
                  <ListItem key={yard._id}>
                    <Link to={"/yards/" + book._id}>
                      <strong>
                        {yard.title} where {yatd.location}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteYard(yard._id)} />
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

export default Yards;
