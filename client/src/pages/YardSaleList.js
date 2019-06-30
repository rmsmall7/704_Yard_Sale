import React, { Component } from 'react';
import API from "../utils/API"
// import FooterBottom from '../components/FooterBottom'


export default class YardSaleList extends Component {
  state = {
    yardSales: []
  }

  componentDidMount(){
    this.getYardSales()
  }

  getYardSales = () => {
    API.getPosts()
      .then(dbData => {
        this.setState({
          yardSales: dbData.data
        }, ()=>console.log(this.state.yardSales))
      })
      .catch(err => console.log(err))
  }

  render() {
    return (

      <div className="container">
        <div style={{ marginTop: 100 }}>

          {
            this.state.yardSales.map((yardSale, i) => {
              return <p key={i + "-paragraph"}>{yardSale.location}  </p>
            })
          }

        </div>
       
      </div>
      
    )
  }
}