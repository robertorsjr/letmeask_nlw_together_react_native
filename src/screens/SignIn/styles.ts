import styled from 'styled-components/native';
import { Colors } from '../../resources';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${Colors.background};
`;

const SubTitle = styled.Text`
  color: ${Colors.heading};
  text-align: center;
  font-size: 15px;
  margin-bottom: 64px;
`;

const Title = styled.Text`
  color: ${Colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 200px;
  border-bottom-width: 2px;
`;

const Image = styled.Image`
  width: 100%;
  height: 360px;
`;

const Content = styled.View`
  margin-top: -40px;
  padding-horizontal: 50px;
`;

export { Container, SubTitle, Title, Input, Image, Content };
