import styled from "styled-components/native";
import themes from "../../themes/themes";

export const TextInputCustom = styled.TextInput`
  height: 48px;
  width: 100%;
  border-radius: 5px;
  padding: 0 16px;
  color: ${themes.color.text_color};
  background-color: ${themes.color.primary_light_low};
`;