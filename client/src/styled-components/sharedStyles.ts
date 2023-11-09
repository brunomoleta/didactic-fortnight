import styled from 'styled-components';
import rootSettings from './root';

export const OverallBody = styled.div`
  background-color: ${rootSettings.colors.offWhite};
  font-family: ${rootSettings.fontFamily.primary};
  display: grid;
  align-content: center;
  justify-items: center;
  min-height: 100svh;
  height: 100%;
`