import styled from 'styled-components/native';
import { Colors } from '../../resources';

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background: ${Colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  flex: 1;
  color: ${Colors.heading};
  font-size: 15px;
  text-align: center;
`;

const Image = styled.Image`
  width: 24px;
  height: 18px;
`;

const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-color: ${Colors.line};
`;

export { Container, Text, Image, IconWrapper };
