import React from 'react';

import { AuthenticationProvider } from './Authentication';
import { FilterListProvider } from './FilterList';

export const FilterListProviderHook = ({ children }: any) => {
  return <FilterListProvider>{children}</FilterListProvider>;
};

export const AuthenticationProviderHook = ({ children, setLogged }: any) => {
  return <AuthenticationProvider setLogged={setLogged}>{children}</AuthenticationProvider>;
};
