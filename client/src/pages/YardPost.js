import React, { Component } from 'react';


export default class YardPost extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeStartTime = this.onChangeStartDate.bind(this);
        this.onChangeEndTime = this.onChangeEndDate.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeItems = this.onChangeItems.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Title: '',
            Location: '',
            Start_Time: '',
            End_Time: '',
            Date: '',
            Items: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeLocation(e) {
        this.setState({
            Location: e.target.value
        });
    }

    onChangeStartTime(e) {
        this.setState({
            Start_Time: e.target.value
        });
    }

    onChangeEndTime(e) {
        this.setState({
            End_Time: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        });
    }

    onChangeItems(e) {
        this.setState({
            Items: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`The values are ${this.state.Title}, ${this.state.Location}, ${this.state.Start_Time}, ${this.state.End_Time}, 
        ${this.state.Date}, and ${this.state.Items} `);
        this.setState({
            Title: '',
            Location: '',
            Start_Time: '',
            End_Time: '',
            Date: '',
            Items: ''
        })
    }

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
      <div style={{marginTop: 10}}>
      <h3>Add New Yard Sale</h3>
      <form>
          <div className="form-group">
              <label>Title: </label>
              <input type="text" 
              className="form-control"
              value={this.state.Title}
              onChange={this.onChangeTitle}/>
          </div>
          <div className="form-group">
              <label>Location: </label>
              <input type="text" 
              className="form-control"
              value={this.state.Location}
              onChange={this.onChangeLocation}/>
          </div>
          <div className="form-group">
              <label>Start Time: </label>
              <input type="time" 
              className="form-control"
              value={this.state.Start_Time}
              onChange={this.onChangeStartTime}/>
          </div>
          <div className="form-group">
              <label>End Time: </label>
              <input type="time" 
              className="form-control"
              value={this.state.End_Time}
              onChange={this.onChangeEndTime}/>
          </div>
          <div className="form-group">
              <label>Date: </label>
              <input type="date" 
              className="form-control"
              value={this.state.Date}
              onChange={this.onChangeDate}/>
          </div>
          <div className="form-group">
              <label>Items: </label>
              <input type="text" 
              className="form-control"
              value={this.state.Items}
              onChange={this.onChangeItems}/>
          </div>

          <div className="form-group">
              <input type="submit" value="Submit Yard Sale" className="btn btn-primary"/>
          </div>
      </form>
  </div>
    )
  }
}