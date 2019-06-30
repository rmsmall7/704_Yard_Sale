import React, { Component } from 'react';
import API from "../utils/API"
// import FooterBottom from '../components/FooterBottom'


export default class YardSaleList extends Component {
  state = {
    yardSales: []
  }

  componentDidMount() {
    this.getYardSales()
  }

  getYardSales = () => {
    API.getPosts()
      .then(dbData => {
        this.setState({
          yardSales: dbData.data
        }, () => console.log(this.state.yardSales))
      })
      .catch(err => console.log(err))
  }

  render() {
    return (

      <div className="container">
        <div style={{ marginTop: 100 }}>

          {
            this.state.yardSales.map((yardSale, i) => {
              return (
                <div className="card mx-2 mb-3" style={{  width: "80rem"}}>
                  <div className="card-header">
                    <p key={i + "-paragraph"}>{yardSale.title}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" key={i + "-location"}>Location: {yardSale.location}</li>
                    <li className="list-group-item" key={i + "-start_time"}>Start Time: {yardSale.start_time}</li>
                    <li className="list-group-item" key={i + "-end_time"}>Duration: {yardSale.end_time}</li>
                    <li className="list-group-item" key={i + "-date"}>Date: {yardSale.date}</li>
                    <li className="list-group-item" key={i + "-items"}>Items for Sale: {yardSale.items}</li>
                  </ul>
                </div>
              )
            })


          }

        </div>

      </div>

    )
  }
}