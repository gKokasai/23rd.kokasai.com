import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export const GlobalProvider = (children) => {
  const [inputId, setInputId] = useState({ state: '' });
  const [inputPassWord, setInputPassWord] = useState({ state: '' });
  /*
  const [isLoggedIn, setIsLoggedIn] = useState({ state: false });
  const [isLoading, setIsLoading] = useState({ state: false });
  const [postedId, setPostedId] = useState({ state: false });
*/
  return (
    <GlobalContext.Provider
      value={
          {
            inputId,
            setInputId,
            inputPassWord,
            setInputPassWord,
            /*
            isLoggedIn,
            setIsLoggedIn,
            isLoading,
            setIsLoading,
            postedId,
            setPostedId,
               */
          }
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};
