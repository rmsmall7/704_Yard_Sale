import React, { Component } from 'react';


export default class YardPost extends Component {
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
              <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
              <label>Location: </label>
              <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
              <label>Start Time: </label>
              <input type="time" className="form-control"/>
          </div>
          <div className="form-group">
              <label>End Time: </label>
              <input type="time" className="form-control"/>
          </div>
          <div className="form-group">
              <label>Date: </label>
              <input type="date" className="form-control"/>
          </div>
          <div className="form-group">
              <label>Items: </label>
              <input type="text" className="form-control"/>
          </div>

          <div className="form-group">
              <input type="submit" value="Submit Yard Sale" className="btn btn-primary"/>
          </div>
      </form>
  </div>
    )
  }
}