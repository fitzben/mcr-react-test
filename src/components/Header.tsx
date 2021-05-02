import React from 'react';
import { Col, Row, Navbar as BsNavbar, Button } from 'react-bootstrap';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar sticky="top" className="bg-blue">
      <div className="w-100 topbar px-4">
        <Title>DEMO Streaming</Title>
      </div>
      <LinkTo to="#">Log In</LinkTo>
      <Button>Start your free trial</Button>
    </Navbar>
  )
}

const LinkTo = styled(Link)`
  font-size: 16px;
  color: white;
  margin-right: 15px;
`

const Navbar = styled(BsNavbar)`
  flex-direction: row;
  align-item: start;
  background-color: #1681fb;
  box-shadow: 0px 5px 10px rgb(0 0 0 / 50%);

  .topbar {
    padding: 8px 0;
  }
`

const Title = styled.div`
  font-size: 40px;
  color: white;
  text-align: left;
  margin-left: 100px;
  @media(max-width: 576px) {
    font-size: 20px;
  }
`