import styled from 'styled-components';
import rootSettings from './root';

export const CardName = styled.h2`
  font-weight: ${rootSettings.fontWeight.bold};
  letter-spacing: ${rootSettings.fontType.h2.letterSpacing};
  line-height: ${rootSettings.fontType.h2.lineHeight};
  font-size: ${rootSettings.fontType.h2.fontSize};
`;
export const Persona = styled.h3`
  color: ${rootSettings.colors.primary};
  font-weight: ${rootSettings.fontWeight.normal};
  font-size: ${rootSettings.fontType.body2.fontSize};
  line-height: ${rootSettings.fontType.body2.lineHeight};
  margin-block-start: 8px;
`;

export const Details = styled.details`
  &> summary{
    cursor: pointer;
    list-style: none;
    
}
  &> summary:active{
    outline: 4px solid ${rootSettings.colors.primary};
}
  &> summary::-webkit-details-marker {
    display: none;}
  
  color: ${rootSettings.colors.dark100};
`
export const KeyFeats = styled.h4`
  font-weight: ${rootSettings.fontWeight.semiBold};
  font-size: ${rootSettings.fontType.body2.fontSize};
  line-height: ${rootSettings.fontType.body2.lineHeight};
`;

export const Price = styled.h3`
  font-weight: ${rootSettings.fontWeight.medium};
  font-size: ${rootSettings.fontType.h2.fontSize};
  line-height: ${rootSettings.fontType.h1.lineHeight};
`;

export const LiWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const SumWrapper = styled(LiWrapper)`
  justify-content: space-between;
`

export const KeyFeatsWrapper = styled.div`
  margin-block: 32px;
`;

export const UList = styled.ul`
  margin-block-start: 24px;
  display: flex;
  flex-flow: column;
  gap: 16px;
`;
/*
export const DetailsFeats = styled.details`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;*/
