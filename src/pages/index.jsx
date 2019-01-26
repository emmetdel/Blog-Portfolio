import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';

  h1 {
    margin-bottom: 12.5px;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  li {
    padding: 0;
    margin-bottom: 5px;
  }
`;

const LinkAnchor = styled.a`
  margin-bottom: 0px;
  padding: 0;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
  &:hover {
    background-color: yellow;
  }
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const links = ['Curriculum Vitae', 'Portfolio', 'Blog'];
    return (
      <Wrapper>
        <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <div>
          <h1>{siteTitle}</h1>
          <LinksList>
            {links.map(link => (
              <li>
                <LinkAnchor href="asd">{link}</LinkAnchor>
              </li>
            ))}
          </LinksList>
        </div>
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
