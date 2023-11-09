import styled from 'styled-components';
import rootSettings from '../../styled-components/root';

interface StyledProps {
  $ultimate?: boolean;
  isBtn?: boolean;
}

const Button = styled.button<StyledProps>`
  margin-block: 26px;
  font-weight: ${rootSettings.fontWeight.semiBold};
  padding-block: 16px;
  padding-inline: 36px;
  border-radius: 100px;
  color: ${rootSettings.colors.offWhite};
  background-color: ${rootSettings.colors.primary};
  outline: 3px solid
    ${(props) =>
      props.$ultimate
        ? rootSettings.colors.offWhite
        : rootSettings.colors.primaryUnsaturated};
  outline-offset: 4px;

  &:focus {
    outline: 3px solid ${rootSettings.colors.primaryMedium};
  }

  &:active {
    background-color: ${rootSettings.colors.dark000};
  }

  &:hover {
    outline: 3px solid ${rootSettings.colors.primary};
    scale: 1.05;
    box-shadow: 0 50px 50px -25px rgba(75, 92, 154, 1);
  }
`;

export default Button ;
