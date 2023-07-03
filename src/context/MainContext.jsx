import React from 'react'
import { createContext, useState, useEffect } from "react";

export const MainContext = createContext()


export function MainContextProvider(props) {
    const [dark, setDark] = useState("");
    const [check, setCheck] = useState(false);
      
      function changeTheme() {
        if (dark === "") {
          setDark("dark");
          setCheck(true)
        } else {
          setDark("");
          setCheck(false)
        }
      }
  return (
    <MainContext.Provider value={{
        changeTheme,
        dark,
        setDark,
        check
    }}>
        {props.children}
    </MainContext.Provider>
  )
}
