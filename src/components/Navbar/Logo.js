/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import {
  transitionSpeed,
  transitionFn,
  screenSmMin,
  sidebarWidth,
  sidebarMiniWidth,
  navbarHeight,
  screenHeaderCollapse,
} from '../../styles/variables';

const StyledLogo = styled.a`
  /* transitions */
  -webkit-transition: width ${transitionSpeed} ${transitionFn};
  -o-transition: width ${transitionSpeed} ${transitionFn};
  transition: width ${transitionSpeed} ${transitionFn};

  /* theme */
  background-color: ${props => props.theme.logoBgColor || '#fff'} !important;
  color: ${props => props.theme.logoColor || '#000'} !important;
  border-bottom: ${props => props.theme.logoBorderBottom || 'none'} !important;;
  border-right: ${props => props.theme.navbarItemBorder || 'none'} !important;;
  &:hover {
    background-color: ${props => props.theme.logoHover || '#f6f6f6'} !important;;
  }

  display: block;
  text-decoration: none;
  float: left;
  height: ${navbarHeight};
  font-size: 20px;
  line-height: ${navbarHeight};
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 0 15px;
  font-weight: 300;
  overflow: hidden;
  &:hover {
    text-decoration: none !important;
  }

  /* media queries */
  @media (max-width: ${screenHeaderCollapse}) {
    width: 100%;
    float: none;
    ${props => props.theme.logoSmallVariant || ''}
  }
  @media (min-width: ${screenSmMin}) {
    width: ${props => ((props.sidebarMini && props.collapse) ? sidebarMiniWidth : sidebarWidth)};
    padding: ${props => ((props.sidebarMini && props.collapse) && '0')};
  }
`;

const LargeLogo = styled.span`
  display: block;
  @media (min-width: ${screenSmMin}) {
    display: ${props => ((props.sidebarMini && props.collapse) ? 'none' : 'block')}
  }
`;

const SmallLogo = styled.span`
  display: none;
  @media (min-width: ${screenSmMin}) {
    display: ${props => ((props.sidebarMini && props.collapse) ? 'block' : 'none')}
  }
`;

const Logo = props => (
  <StyledLogo {...props} >
    <LargeLogo {...props}>{props.logoLg}</LargeLogo>
    <SmallLogo {...props}>{props.logoSm}</SmallLogo>
  </StyledLogo>
);

Logo.propTypes = {
  logoLg: React.PropTypes.element,
  logoSm: React.PropTypes.element,
};

export default Logo;