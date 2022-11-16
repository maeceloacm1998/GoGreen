import React from 'react';

import {FilterListProvider} from './FilterList';

export const FilterListProviderHook = ({children}: any) => {
  return <FilterListProvider>{children}</FilterListProvider>;
};
