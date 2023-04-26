import React from "react";
export const themes={
    light:{
        color:'black',
        background:'white'
    },
    dark:{
        color:'white',
        background:'black'
    }
}
const ThemeContext=React.createContext(themes.light);
export default ThemeContext;    