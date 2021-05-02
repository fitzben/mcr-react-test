import React from 'react';
import styled from '@emotion/styled';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../assets/social/facebook-white.svg';
import { ReactComponent as Instagram } from '../assets/social/instagram-white.svg';
import { ReactComponent as Twitter } from '../assets/social/twitter-white.svg';
import { ReactComponent as AppStore } from '../assets/store/app-store.svg';
import { ReactComponent as PlayStore } from '../assets/store/play-store.svg';
import { ReactComponent as WindowsStore } from '../assets/store/windows-store.svg';

const optionMenu = [
  {label: 'Home', path: "/"},
  {label: 'Terms and Condition', path: "#"},
  {label: 'Privacy Policy', path: "#"},
  {label: 'Collection Statement', path: "#"},
  {label: 'Help', path: "#"},
  {label: 'Manage Account', path: "#"},
]

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <S.Footer>
      <Container className="pt-4">
        <Row>
          <S.Col>
            {optionMenu.map((menu) => {
              return (
                <S.LinkTo to={menu.path}>
                  {/* <MenuTitle> */}
                    {menu.label}
                  {/* </MenuTitle> */}
                </S.LinkTo>
              )
            })}
          </S.Col>
        </Row>
        <Row>  
          <S.Col>
            <S.Copyright>
              {`© ${year} PT Printerous Global. All Rights Reserved.`}
            </S.Copyright>
          </S.Col>
        </Row>
        <Row className="pt-5 mt-5">
          <S.Col>
            <S.Facebook />
            <S.Twitter />
            <S.Instagram />
          </S.Col>
          <S.Col>  
            <S.AppStore />
            <S.PlayStore />
            <S.WindowsStore />
          </S.Col>
        </Row>
      </Container>
    </S.Footer>
  )
}

const S = {
  Footer: styled.footer`
    position: relative;
    bottom: 0;
    width: 100%;
    height: 250px;
    background: #1e1e1e;
  `,
  LinkTo: styled(Link)`
    font-size: 16px;
    color: white;
    margin-right: 15px;
  `,
  Copyright: styled.div`
    margin-top: 15px;
    font-size: 14px;
    color: white;
  `,
  Col: styled(Col)`
    text-align: left;
  `,
  Facebook: styled(Facebook)`
    width: 45px;
    height: 45px;
    margin-right: 28px;
  `,
  Instagram: styled(Instagram)`
    width: 45px;
    height: 45px;
    margin-right: 28px;
  `,
  Twitter: styled(Twitter)`
    width: 45px;
    height: 45px;
    margin-right: 28px;
  `,
  AppStore: styled(AppStore)`
    width: 200px;
    height: 45px;
  `,
  PlayStore: styled(PlayStore)`
    width: 200px;
    height: 45px;
  `,
  WindowsStore: styled(WindowsStore)`
    width: 200px;
    height: 45px;
  `,
}