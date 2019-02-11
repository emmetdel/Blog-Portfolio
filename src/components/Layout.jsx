import React from 'react';
import styled from 'styled-components';
import Sidebar from './shared/Sidebar';

const Arrange = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-column-gap: 25px;
`;

class Layout extends React.Component {
  render() {
    return (
      <Arrange>
        <div style={{ height: '100vh' }}>
          <Sidebar />
        </div>
        <div>content</div>
      </Arrange>
    );
  }
}

export default Layout;
