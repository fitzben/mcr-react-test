import React from 'react';
import axios from 'axios';
import { dummy } from './DummyData';
import { Col, Container, Row } from 'react-bootstrap';
import { orderBy } from 'lodash';
import Header from './Header';
import { Title, TtileHome } from './Homepage'
import Footer from './Footer';

export default function Movies() {
  const url = 'localhost:3000/sample.json'
  const data = axios.get(url).then(res => console.log(res))
  
  const datas: any = orderBy(dummy.entries.filter((data) => data.releaseYear >= 2010 && data.programType === 'movie'), ['title'], ['asc']).slice(0, 21)

  return (
    <Container fluid>
      <Header />
      <TtileHome>
        <Title>
          Popular Movies
        </Title>
      </TtileHome>
      <MoviesData datas={datas} />
      <Footer />
    </Container>
  )
}

function MoviesData({datas}: any) {
  return (
    <Row className="mt-5">
      {datas.map((data: any) => {
        return (
          <Col md={2} className="mb-5">
            <img src={data?.images?.PosterArt?.url} alt="" width='185px' height='265px' />
            <div>{data?.title}</div>
          </Col>
        )
      })}
    </Row>
  )
}