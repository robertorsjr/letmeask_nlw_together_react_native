import styled from 'styled-components/native';

interface SeparatorProps {
  x?: number;
  y?: number;
}

const Separator = styled.View<SeparatorProps>`
  height: ${props => props.y || 10}px;
  width: ${props => props.x || 10}px;
`;

export default Separator;
