import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 15px solid #333;
  border-radius: 15px;
  width: 100%;
  max-width: 25vw;
  background: #111;
  position: relative;
  left: 145px;
  top: 25px;
  opacity: 0.9;
  align-content: center;
`;
