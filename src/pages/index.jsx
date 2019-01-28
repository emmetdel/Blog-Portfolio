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
    color: black;
    border-bottom-width: 0;
  }
  &:hover {
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition: 0.2s;
    background-color: #e65100;
    color: white;
    scale: 2;
    padding-right: 35px;
    border-radius: 0 2px 10px 0;
    font-style: italic;
  }
`;

const Title = styled.h1`
  margin-top: 2.5px;
  margin-bottom: 2px !important;
`;
const SubTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
  text-transform: lowercase;
  font-size: 0.9rem;
  color: #e65100;
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const links = [
      {
        Name: 'Curriculum Vitae',
        Href: '/cv',
      },
      {
        Name: 'Portfolio',
        Href: '/portfolio',
      },
      {
        Name: 'Blog',
        Href: '/blog',
      },
    ];
    return (
      <Wrapper>
        <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <div>
          <Title>{siteTitle}</Title>
          <SubTitle>Software / Web Developer</SubTitle>
          <LinksList>
            {links.map(link => (
              <li key={link.Href}>
                <LinkAnchor href={link.Href}>{link.Name}</LinkAnchor>
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
