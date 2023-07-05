import styled from 'styled-components';

export const AddCustomButton = styled.button`
  background: var(--customButtonBackground);
  width: 334px;
  height: 56px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: var(--customButtonColor);
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  @media (max-width: 375px) {
    width: 300px;
  }

  @media (min-width: 768px) {
    height: 56px;
    width: 334px;
  }

`;

export const SvgPlusIcon = styled.svg`
  stroke: var(--iconPlusColor);
`;

export const CustomButtonBackground = styled.div`
    background: var(--plusButtonBackground);
    width: 28px;
    height: 28px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

