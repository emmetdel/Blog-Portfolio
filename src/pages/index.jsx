import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import Cartoon from '../myAvatar.svg';
import Cartoon1 from '../myAvatar (1).svg';
import NavList from '../components/shared/NavList';
import links from '../data/nav-links';

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  background: linear-gradient(to right, #8e9eab, #eef2f3);
`;

const Title = styled.h1`
  margin-top: 2.5px;
  margin-bottom: 2px !important;
  animation-timing-function: cubic-bezier(0.55, 1.15, 1, 1);
  font-weight: 400;
`;
const SubTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
  text-transform: lowercase;
  font-size: 0.9rem;
  color: #e65100;
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  align-self: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: Cartoon,
    };
  }

  changePicture = bigEyes => {
    if (bigEyes) {
      this.setState({ picture: Cartoon });
    } else {
      this.setState({ picture: Cartoon1 });
    }
  };

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Wrapper>
        <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <Container>
          <HeroAvatar src={this.state.picture} alt="me" id="avatar" />
          <Title>{siteTitle}</Title>
          <SubTitle>Software / Web Developer</SubTitle>
          <NavList links={links} />
        </Container>
      </Wrapper>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
