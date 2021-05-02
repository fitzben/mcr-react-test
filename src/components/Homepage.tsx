import React, { Fragment } from 'react';
import { Col, Row, Button, Card } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

export default function Homepage() {
  return (
    <Fragment>
      <Header />
      Welcome guys!
      <Footer />
    </Fragment>
  )
}