'use client';

import React, { createContext, useContext, ReactNode } from 'react';

interface AppContextType {
  author: string;
  email: string;
}

const defaultContext: AppContextType = {
  author: 'Your Name', // Default value, can be overridden by Provider
  email: 'your.email@example.com',
};

const AppContext = createContext<AppContextType>(defaultContext);

export const AppProvider: React.FC<{ children: ReactNode; author?: string; email?: string }> = ({ 
  children, 
  author = 'GitHub Copilot', 
  email = 'copilot@github.com' 
}) => {
  return (
    <AppContext.Provider value={{ author, email }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
