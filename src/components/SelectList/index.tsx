import React, {useState} from 'react';
import SelectList from 'react-native-dropdown-select-list';
import {Container} from './styled';

export type SelectListComponentType = {
  data: Array<SelectListItemType>;
  selectedItem: (item: string) => void;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

export type SelectListItemType = {
  key: string;
  value: string;
};

const checkProps = (props: SelectListComponentType) => ({
  data: props.data ? props.data : [],
  marginTop: props.marginTop ? props.marginTop : 0,
  marginBottom: props.marginBottom ? props.marginBottom : 0,
  marginLeft: props.marginLeft ? props.marginLeft : 0,
  marginRight: props.marginRight ? props.marginRight : 0,
});

const SelectListComponent = (props: SelectListComponentType) => {
  const {data, marginTop, marginBottom, marginLeft, marginRight} =
    checkProps(props);

  const [selected, setSelected] = useState('');

  return (
    <Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}>
      <SelectList
        setSelected={setSelected}
        data={data}
        onSelect={() => console.log(selected)}
      />
    </Container>
  );
};

export default SelectListComponent;
