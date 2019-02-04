import React from 'react';
import styled from 'styled-components';
import { HeroAvatar } from '../pages';
import Cartoon from '../myAvatar.svg';

const Arrange = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 25px;
`;

const Sidebar = () => <HeroAvatar src={Cartoon} alt="me" id="avatar" />;

class Layout extends React.Component {
  render() {
    return (
      <Arrange>
        <div style={{ borderRight: '5px solid grey', height: '100vh' }}>
          <Sidebar />
        </div>
        <div>content</div>
      </Arrange>
    );
  }
}

export default Layout;
