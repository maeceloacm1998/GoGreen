import React, {createContext, useContext, useState, useMemo} from 'react';

interface AuthenticationContextData {
  authentication(body: User | Company, userType: string): void;
  logout(): void;
  user: User;
  company: Company;
  loggedUser: boolean;
  loggedCompany: boolean;
}

export interface User {
  id: number;
  name: string;
  userType: string;
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
  userType: string;
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
  {} as AuthenticationContextData,
);

export const userTypeProps = {
  user: 'User',
  company: 'Company',
};

export const AuthenticationProvider = ({children}: any) => {
  const [user, setUser] = useState<User>({} as User);
  const [company, setCompany] = useState<Company>({} as Company);
  const [loggedUser, setLoggedUser] = useState<boolean>(false);
  const [loggedCompany, setLoggedCompany] = useState<boolean>(false);

  async function authentication(body: User | Company) {
    if (body.userType === userTypeProps.user) {
      setUser(body as User);
      setLoggedUser(true);
    } else {
      setCompany(body as Company);
      setLoggedCompany(true);
    }
  }

  function logout() {
    if (loggedUser) {
      setLoggedUser(false);
    } else {
      setLoggedCompany(false);
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{
        authentication,
        loggedUser,
        loggedCompany,
        logout,
        user,
        company,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export function useAuthentication(): AuthenticationContextData {
  const context = useContext(AuthenticationContext);

  return context;
}
