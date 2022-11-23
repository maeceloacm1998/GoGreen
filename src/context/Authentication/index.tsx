import React, {createContext, useContext, useState, useMemo} from 'react';

interface AuthenticationContextData {
  authenticationUser(email: string, password: string): void;
  logout(): void;
  user: User;
  logged: boolean;
}

interface User {
  id: number;
  name: string;
  age: number;
  username: string;
  senha: string;
  city: string;
  state: string;
  cep: string;
}

const AuthenticationContext = createContext<AuthenticationContextData>(
  {} as AuthenticationContextData,
);

export const AuthenticationProvider = ({children}: any) => {
  const [user, setUser] = useState<User>({} as User);
  const [logged, setLogged] = useState<boolean>(false);

  async function authenticationUser(email: string, password: string) {
    const fakeUser: User = {
      id: 1,
      age: 24,
      cep: '31550500',
      city: 'Belo Horizonte',
      name: 'Marcelo',
      senha: '12341',
      state: 'Minas Gerais',
      username: 'maeceloacm',
    };

    setUser(fakeUser);
    setLogged(true);
  }

  console.log('aqui', logged);

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
