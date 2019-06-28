import React, { Component } from 'react';
import API from "../utils/API";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


class YardPost extends Component {
=======
import SuperContainerInner from '../components-new/SuperContainerInner'

export default class YardPost extends Component {
>>>>>>> 1170ef201aa7073c40b62560ae443b29fb097802

    state = {
        //yardsale: [],
        title: '',
        location: '',
        start_time: '',
        end_time: '',
        date: '',
        items: ''
    }

<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        //     this.onChangeTitle = this.onChangeTitle.bind(this);
        //     this.onChangeLocation = this.onChangeLocation.bind(this);
        //     this.onChangeStartTime = this.onChangeStartDate.bind(this);
        //     this.onChangeEndTime = this.onChangeEndDate.bind(this);
        //     this.onChangeDate = this.onChangeDate.bind(this);
        //     this.onChangeItems = this.onChangeItems.bind(this);
        //     this.onSubmit = this.onSubmit.bind(this);

            this.state = {
                title: '',
                location: '',
                start_time: '',
                end_time: '',
                date: '',
                items: ''
        }
    }

    // onChangeTitle(e) {
    //     this.setState({
    //         title: e.target.value
    //     });
    // }

    // onChangeLocation(e) {
    //     this.setState({
    //         location: e.target.value
    //     });
    // }

    // onChangeStartTime(e) {
    //     this.setState({
    //         start_time: e.target.value
    //     });
    // }

    // onChangeEndTime(e) {
    //     this.setState({
    //         end_time: e.target.value
    //     });
    // }

    // onChangeDate(e) {
    //     this.setState({
    //         date: e.target.value
    //     });
    // }

    // onChangeItems(e) {
    //     this.setState({
    //         items: e.target.value
    //     });
    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // onSubmit = e => {
    //     e.preventDefault();
    //     console.log(`The values are ${this.state.title}, ${this.state.location}, ${this.state.start_time}, ${this.state.end_time}, 
    //         ${this.state.date}, and ${this.state.items} `);
    //         if (this.state.title && this.state.location) {
    //     API.addPost({
    //         title: this.state.title,
    //         location: this.state.location,
    //         start_time: this.state.start_time,
    //         end_time: this.state.end_time,
    //         date: this.state.date,
    //         items: this.state.items
    //     })
    //         .then(res => this.loadYardsales())
    //         .catch(err => console.log(err));
    // }
    // }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.location) {
            API.savePost({
                title: this.state.title,
                location: this.state.location
            })
                .then(res => this.loadYardsales())
                .catch(err => console.log(err));
        }
        // console.log(`this value is ${ this.state.title }`)
    };


=======
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        console.log(this.state)
        if (this.state.title && this.state.location) {
            API.savePost(this.state)
                .then(res => this.loadYardsales())
                .catch(err => console.log(err));
        }
        console.log(`this value is ${ this.state.title }`)
        this.setState({
            title: '',
            location: '',
            start_time: '',
            end_time: '',
            date: '',
            items: ''
        })
    };



>>>>>>> 1170ef201aa7073c40b62560ae443b29fb097802
    loadYardsales = () => {
        API.getPosts()
            .then(res =>
                this.setState({
                    yardsale: res.data, title: '', location: '', start_time: '', end_time: '',
                    date: '', items: ''
                })
            )
            .catch(err => console.log(err));
<<<<<<< HEAD
    };

=======
    }
>>>>>>> 1170ef201aa7073c40b62560ae443b29fb097802
    deletePost = id => {
        API.deletePost(id)
            .then(res => this.getPost())
            .catch(err => console.log(err));
    };

    render() {
        return (
<<<<<<< HEAD
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>What sale am I going to??</h1>
                        </Jumbotron>
                        <form> 
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (Optional)"
                            />
                            <Input
                                value={this.state.location}
                                onChange={this.handleInputChange}
                                name="location"
                                placeholder="Location (Optional)"
                            />
                           
                            <FormBtn
                                disabled={!(this.state.title && this.state.location)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Yard Sale
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
};


export default YardPost;
=======
            <div className="container">
                <div style={{ marginTop: 100 }}>
                    <h3>Add New Yard Sale</h3>
                    <form>
                        <div className="form-group">
                            <label>Title: </label>
                            <input type="text"
                                className="form-control"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Location: </label>
                            <input type="text"
                                className="form-control"
                                name="location"
                                value={this.state.location}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Start Time: </label>
                            <input type="time"
                                className="form-control"
                                name="start_time"
                                value={this.state.start_time}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>End Time: </label>
                            <input type="time"
                                className="form-control"
                                name="end_time"
                                value={this.state.end_time}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Date: </label>
                            <input type="date"
                                className="form-control"
                                name="date"
                                value={this.state.date}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Items: </label>
                            <input type="text"
                                className="form-control"
                                name="items"
                                value={this.state.items}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group">
                            <input type="submit"
                                value="Submit Yard Sale"
                                className="btn btn-primary"
                                onClick={this.handleFormSubmit} />
                        </div>
                    </form>
                </div>

            </div>

        )
    }
}
>>>>>>> 1170ef201aa7073c40b62560ae443b29fb097802
