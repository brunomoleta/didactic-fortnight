import React from 'react';
import styled from 'styled-components';
import rootSettings from '../../styled-components/root';
import { renderOption } from '../subOption';

const TheButton = styled.button`
  margin-block: 26px;
  font-weight: ${rootSettings.fontWeight.semiBold};
  padding-block: 16px;
  padding-inline: 36px;
  border-radius: 100px;
  color: ${rootSettings.colors.offWhite};
  background-color: ${rootSettings.colors.primary};
`;

function Button(props: { children: React.ReactNode }) {
  return <TheButton>{props.children}</TheButton>;
}

export default Button;
