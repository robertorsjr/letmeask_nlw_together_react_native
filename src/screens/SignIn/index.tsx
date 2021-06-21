import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Image, Content, Title, SubTitle } from './styles';
import Illustration from '../../assets/illustration.png';
import { ButtonIcon, Separator } from '../../components';

export default function SignIn() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image source={Illustration} />
      <Content>
        <Title>
          Conecte-se{'\n'}e organize{'\n'}suas jogatinas
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </SubTitle>
        <ButtonIcon title={'Entrar com Discord'} />
        <Separator y={20} />
      </Content>
    </Container>
  );
}
