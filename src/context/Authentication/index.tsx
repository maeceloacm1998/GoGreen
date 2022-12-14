import React, { createContext, useContext, useState } from 'react';
import { auth } from './repository';

interface AuthenticationContextData {
  login: (email: string, password: string) => Promise<void>;
  authentication: (body: User | Company, userType: string) => void;
  logout: () => void;
  user: User;
  company: Company;
  loggedUser: boolean;
  loggedCompany: boolean;
}

export interface User {
  id: number;
  name: string;
  city: string;
  state: string;
  cep: string;
  address: string;
  date: string;
  email: string;
  password: string;
}

export interface Company {
  id: number;
  name: string;
  imageUrl: string;
  category: string;
  city: string;
  state: string;
  cep: string;
  address: string;
  date: string;
  email: string;
  password: string;
  description: string;
}

const AuthenticationContext = createContext<AuthenticationContextData>(
  {} as AuthenticationContextData
);

export const userTypeProps = {
  user: 'user',
  company: 'Company'
};

export const AuthenticationProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>({} as User);
  const [company, setCompany] = useState<Company>({} as Company);
  const [loggedUser, setLoggedUser] = useState<boolean>(false);
  const [loggedCompany, setLoggedCompany] = useState<boolean>(false);

  async function login(email: string, password: string) {
    const res = await auth(email, password);
    authentication(res.user, res.userType);
  }

  function authentication(body: User | Company, userType: string) {
    if (userType === userTypeProps.user) {
      setUser(body as User);
      setLoggedUser(true);
    } else {
      console.log('company', body);
      setCompany(body as Company);
      setLoggedCompany(true);
    }
  }

  function logout() {
    if (loggedUser) {
      setUser({} as User);
      setLoggedUser(false);
    } else {
      setCompany({} as Company);
      setLoggedCompany(false);
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{
        authentication,
        login,
        loggedUser,
        loggedCompany,
        logout,
        user,
        company
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export function useAuthentication(): AuthenticationContextData {
  const context = useContext(AuthenticationContext);

  return context;
}
