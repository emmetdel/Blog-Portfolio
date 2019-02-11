import React from 'react';
import styled from 'styled-components';
import NavList from './NavList';
import links from '../../data/nav-links';

const NameHero = styled.h1`
  font-size: 72px;
  font-weight: 700;
  border-right: 5px solid grey;
  padding: 0 25px 0 0;
  margin: 0;
  font-family: 'Nunito';
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  /* align-items: center; */
  text-align: end;
  flex-direction: column;
  justify-content: center;
`;

class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <NameHero>Emmet Delaney</NameHero>
        <NavList links={links} />
      </Container>
    );
  }
}

export default Sidebar;
