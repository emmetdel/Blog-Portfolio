import React from 'react';
import styled from 'styled-components';

const LinksList = styled.ul`
  list-style: none;
`;

const LinkAnchor = styled.a`
  margin-bottom: 0px;
  padding: 0;
  color: black;
  border-bottom-width: 0;
  font-family: 'Nunito';
  font-weight: 500;
  font-size: 18px;
  color: light-grey;

  &:link {
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
    font-style: italic;
  }
`;

const NavList = props => (
  <LinksList>
    {props.links.map(link => (
      <li key={link.Href}>
        <LinkAnchor href={link.Href}>{link.Name}</LinkAnchor>
      </li>
    ))}
  </LinksList>
);

export default NavList;
