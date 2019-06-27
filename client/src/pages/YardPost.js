import React, { Component } from 'react';
import API from "../utils/API";
import { Link } from "react-router-dom";


export default class YardPost extends Component {

    state = {
        yardsale: [],
        title: '',
        location: '',
        start_time: '',
        end_time: '',
        date: '',
        items: ''
    }

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

        //     this.state = {
        //         title: '',
        //         location: '',
        //         start_time: '',
        //         end_time: '',
        //         date: '',
        //         items: ''
    // }
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
        // <React.Fragment>
        // <Menu />
        // <SuperContainer>
        //   <Header />
        //   <SuperContainerInner>
        //     <HomeBanner />
        //     <YardSaleHeader />
        //     <Footer />
        //       </SuperContainerInner>
        //     </SuperContainer>
        //     </React.Fragment>
        <div style={{ marginTop: 10 }}>
            <h3>Add New Yard Sale</h3>
            <form>
                <div className="form-group">
                    <label>Title: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Location: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.location}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Start Time: </label>
                    <input type="time"
                        className="form-control"
                        value={this.state.start_time}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>End Time: </label>
                    <input type="time"
                        className="form-control"
                        value={this.state.end_time}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <input type="date"
                        className="form-control"
                        value={this.state.date}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Items: </label>
                    <input type="text"
                        className="form-control"
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
    )
}
}