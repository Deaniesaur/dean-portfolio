import React from 'react';
import Switch from './widgets/Switch';
import dean_logo from '../images/deanpinlac_logo.svg';
import linkedin_logo from '../images/linkedin_logo.svg';
import github_logo from '../images/github_logo.svg';
import styled from 'styled-components';

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: ${(props) => props.theme.color.base1};
`

const Logo = styled.img`
  width: 108px;
  height: 100px;
  // padding: 10px;
`
const LinkLogo = styled.div`
  display: inline-block;
  white-space: nowrap;

  img.linkedin_logo {
    width: 30px;
    height: 30px;
    padding-right: 30px;
  }

  img.github_logo {
    width: 34px;
    height: 42px;
    position: relative;
    top: 8px;
  }
`

const NavList = styled.ul`
  list-style: none;
  display: inline-flex;
  padding: 0;

  li {
    padding-left: 40px;
    line-height: 100px;
    font-size: 3.25vh;
  }

  li span, img {
    user-select: none;
    cursor: pointer;
  }
`

interface Props {
  isDarkTheme: boolean,
  toggleTheme: Function,
}

const Header: React.FC<Props> = ({ isDarkTheme, toggleTheme }) => {
  return (
    <Wrapper>
      <Logo src={dean_logo} alt="Dean Pinlac"/>
      <NavList>
        <li><span>Skills</span></li>
        <li><span>About</span></li>
        <li><span>Contact</span></li>
        <li>
          <LinkLogo>
            <img className="linkedin_logo" src={linkedin_logo}/>
            <img className="github_logo" src={github_logo}/>
          </LinkLogo>
        </li>
        {/* <li><Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/></li> */}
      </NavList>
    </Wrapper>
  )
}

export default Header;