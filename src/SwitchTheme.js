import "./switcher.scss"
import {useState, useEffect} from "react";

function SwitchTheme() {

  //state
  const [colorTheme, setColorTheme] = useState('theme-white');

  //effect
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if(currentThemeColor){
      setColorTheme(currentThemeColor);
    }
  },[]);

  //set theme
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme)
    
  }
  return (
    <div className={`ThemeApp ${colorTheme}`}>
      <div className="theme-options">
        <div id="theme-white" onClick={() => handleClick('theme-white')}
          className="active"/>
        <div id="theme-blue" onClick={() => handleClick('theme-blue')}/>
        <div id="theme-orange" onClick={() => handleClick('theme-orange')}/>
      </div>

      <div className="content-box">
        <h3>Multiple theme switcher</h3>
        <p>Lucid example of usestate and use effect.</p>
      </div>
    </div>
  );
}

export default SwitchTheme;
