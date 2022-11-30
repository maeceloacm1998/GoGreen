import React, {createContext, useContext, useState, useMemo} from 'react';

interface AuthenticationContextData {
  authenticationUser(user: User): void;
  logout(): void;
  user: User;
  logged: boolean;
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

const AuthenticationContext = createContext<AuthenticationContextData>(
  {} as AuthenticationContextData,
);

export const AuthenticationProvider = ({children}: any) => {
  const [user, setUser] = useState<User>({} as User);
  const [logged, setLogged] = useState<boolean>(false);

  async function authenticationUser(user: User) {
    const fakeUser: User = {
      id: 1,
      cep: '31550500',
      city: 'Belo Horizonte',
      name: 'Marcelo',
      password: '12341',
      email: 'maeceloacm1998@gmail.com',
      state: 'Minas Gerais',
      address: 'Rua hildebrando de oliveira, 234',
      date: 'Data',
    };

    setUser(fakeUser);
    setLogged(true);
  }

  function logout() {
    setLogged(false);
    setUser({} as User);
  }

  return (
    <AuthenticationContext.Provider
      value={{
        authenticationUser,
        logged,
        logout,
        user,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export function useAuthentication(): AuthenticationContextData {
  const context = useContext(AuthenticationContext);

  return context;
}
