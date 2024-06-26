import React, { useState } from "react";
import './Switch.css';

interface Props {
  toggleTheme: Function,
  isDarkTheme: boolean
}

const Switch: React.FC<Props> = ({toggleTheme, isDarkTheme}) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme);
  
  const onToggle = () =>  {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  )
}

export default Switch;