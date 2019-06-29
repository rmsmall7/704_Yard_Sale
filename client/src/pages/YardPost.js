import React, { Component } from 'react';
import API from "../utils/API";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import SuperContainerInner from '../components/SuperContainerInner'
=======

>>>>>>> 245e66ac9a42a07d71c25987227b6dd42ce08ceb

export default class YardPost extends Component {

    state = {
        //yardsale: [],
        title: '',
        location: '',
        start_time: '',
        end_time: '',
        date: '',
        items: ''
    }

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



    loadYardsales = () => {
        API.getPosts()
            .then(res =>
                this.setState({
                    yardsale: res.data, title: '', location: '', start_time: '', end_time: '',
                    date: '', items: ''
                })
            )
            .catch(err => console.log(err));
    }
    deletePost = id => {
        API.deletePost(id)
            .then(res => this.getPost())
            .catch(err => console.log(err));
    };

    render() {
        return (
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
