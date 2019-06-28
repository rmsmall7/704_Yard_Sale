import React, { Component } from 'react';
import SuperContainer from '../components-new/SuperContainer';
import SuperContainerInner from '../components-new/SuperContainerInner';
import HomeBanner from '../components-new/HomeBanner';
import YardSaleHeader from '../components-new/YardSaleHeader';
import Row from '../components-new/Row';
import YardSalePost from '../components-new/YardSalePost';
import Footer from '../components-new/Footer'

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