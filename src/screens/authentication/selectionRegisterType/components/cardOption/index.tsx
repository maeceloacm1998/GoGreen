import React from 'react';
import themes from '../../../../../themes/themes';
import { CardImage, CardOptionS, CardTitle } from './styled';

export interface CardOptionProps {
  title: string;
  image: string;
  clickCardOptionListener: (type: string) => void;
}

const CardOption = ({ image, title, clickCardOptionListener }: CardOptionProps) => {
  return (
    <CardOptionS
      activeOpacity={0.7}
      onPress={() => {
        clickCardOptionListener(title);
      }}
      style={{ shadowColor: themes.color.text_color, elevation: 5 }}>
      <CardImage source={image} />
      <CardTitle>{title}</CardTitle>
    </CardOptionS>
  );
};

export default CardOption;
