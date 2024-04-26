import React from 'react';
import Switch from './widgets/Switch';

interface Props {
  isDarkTheme: boolean,
  toggleTheme: Function,
}

const Header: React.FC<Props> = ({ isDarkTheme, toggleTheme }) => {
  return (
    <div>
      <span>This is the header.</span>
      <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
    </div>
  )
}

export default Header;