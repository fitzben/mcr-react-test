import styled from '@emotion/styled';
import React from 'react';
import { Col, Row, Button, Card, Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import MovieImg from '../assets/placeholder.png';
import { useHistory } from 'react-router';

export default function Homepage() {
  return (
    <Container fluid>
      <Header />
      <TtileHome className="px-5 py-3">
        <Title>
          Popular Title
        </Title>
      </TtileHome>
      <ImgContent />
      <Footer />
    </Container>
  )
}

function ImgContent() {
  const { push } = useHistory()
  const imgData = [
    {title: "SERIES", sub: "Popular Series", path: '/series'},
    {title: "MOVIES", sub: "Popular Movies", path: '/movies'}
  ]

  return (
    <Row className="pt-5 px-5" style={{minHeight: '60vh'}}>
      {imgData.map((data) => {
        return (
          <Col className="flex-grow-0">
            <S.Container onClick={() => push(data.path)}>
              <img src={MovieImg} alt="" style={{width: '200px', height: '200px'}}/>
              <S.TextOnImg>{data.title}</S.TextOnImg>
            </S.Container>
            <p>{data.sub}</p>
          </Col>
        )
      })}
    </Row>
  )
}

const S = {
  Container: styled.div`
    position: relative;
    text-align: center;
    background-color: #343a40;
    width: 175px;
    heigth: 250px;
  `,
  TextOnImg: styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  `,
  P: styled.p`
    color: white;
  `
}

export const TtileHome = styled.div`
  background-color: #414141;
  box-shadow: 0px 5px 10px rgb(0 0 0 / 50%);
  padding: 1px 0px 1px 0px;
  height: 70px;
`

export const Title = styled.h3`
  font-size: 28px;
  color: white;
  text-align: left;
`