import React from 'react';
import { Col, Row, Navbar as BsNavbar } from 'react-bootstrap';
import styled from '@emotion/styled';

export default function Header() {
  return (
    <Navbar bg="light" sticky="top" className="bg-blue">
      <div className="w-100 topbar px-4">
        <Title>DEMO Streaming</Title>
      </div>
    </Navbar>
  )
}

const Navbar = styled(BsNavbar)`
  flex-direction: column;
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