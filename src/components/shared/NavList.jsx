import React from 'react';
import styled from 'styled-components';

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
  color: black;
  border-bottom-width: 0;

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

const NavList = props => (
  <LinksList>
    {props.links.map(link => (
      <li key={link.Href}>
        <LinkAnchor
          onMouseEnter={() => props.changePicture(false)}
          onMouseLeave={() => props.changePicture(true)}
          href={link.Href}
        >
          {link.Name}
        </LinkAnchor>
      </li>
    ))}
  </LinksList>
);

export default NavList;
