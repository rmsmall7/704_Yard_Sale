import React, { Component } from 'react';
import SuperContainer from '../components/SuperContainer';
import SuperContainerInner from '../components/SuperContainerInner';
import HomeBanner from '../components/HomeBanner';
import YardSaleHeader from '../components/YardSaleHeader';
import Footer from '../components/Footer'

export default class HomeNew extends Component {
  render() {
    return (
      <SuperContainer>
        <SuperContainerInner>
          <HomeBanner />
          <YardSaleHeader />
          {/* <Row />
          <YardSalePost />
          <YardSalePost />
          <YardSalePost /> */}
          <Footer />
        </SuperContainerInner>
      </SuperContainer>
    );
  }
}