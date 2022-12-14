import React from 'react';

import InputWithIcon from '../../../../../components/InputWithIcon';

import Icon from 'react-native-vector-icons/MaterialIcons';

import themes from '../../../../../themes/themes';

import { ButtonFilter, FilterContainer, FilterText } from './styled';

export type FilterBarProps = {
  onClickFilterButton: () => void;
};

const checkProps = (props: FilterBarProps) => ({
  onClickFilterButton: props.onClickFilterButton ? props.onClickFilterButton : () => {}
});

const FilterBar = (props: FilterBarProps) => {
  const { onClickFilterButton } = checkProps(props);

  return (
    <FilterContainer>
      <InputWithIcon
        icon={<Icon name="search" size={18} color={themes.color.text_color} />}
        placeholder="Buscando por uma empresa?"
      />
      <ButtonFilter activeOpacity={0.7} onPress={onClickFilterButton}>
        <Icon name="filter-list" size={18} color={themes.color.white} />
        <FilterText>Filter</FilterText>
      </ButtonFilter>
    </FilterContainer>
  );
};

export default FilterBar;
