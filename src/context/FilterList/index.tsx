import React, {createContext, useContext, useState} from 'react';

interface FilterListContextData {
  addFilter(filterName: string): void;
  removeFilter(filterName: string): void;
  addFilterSelectedList(filterSelectedList: Array<string>): void;
  removeAllFilters(): void;
  isEmptyList(): boolean;
  filterSelectedList: Array<string>;
}

const FilterListContext = createContext<FilterListContextData>(
  {} as FilterListContextData,
);

export const FilterListProvider = ({children}: any) => {
  const [filterSelectedList, setFilterSelectedList] = useState<Array<string>>(
    [],
  );

  function addFilter(filterName: string) {
    if (isEmptyList()) {
      setFilterSelectedList([filterName]);
    } else {
      setFilterSelectedList(oldValue => [...oldValue, filterName]);
    }
  }

  function removeFilter(filterName: string) {
    if (!isEmptyList()) {
      const removeFilterName = filterSelectedList.filter(
        item => item != filterName,
      );
      setFilterSelectedList(removeFilterName);
    }
  }

  function addFilterSelectedList(filterSelectedList: Array<string>) {
    setFilterSelectedList(filterSelectedList);
  }

  function removeAllFilters() {
    setFilterSelectedList([]);
  }

  function isEmptyList(): boolean {
    return filterSelectedList.length === 0;
  }

  return (
    <FilterListContext.Provider
      value={{
        filterSelectedList,
        addFilter,
        removeFilter,
        addFilterSelectedList,
        removeAllFilters,
        isEmptyList,
      }}>
      {children}
    </FilterListContext.Provider>
  );
};

export function useFilterList(): FilterListContextData {
  const context = useContext(FilterListContext);

  return context;
}
