import React from 'react';
import { Container, IconWrapper, Text, Image } from './styles';
import DiscordImg from '../../assets/discord.png';

type ButtonIconProps = {
  title: string;
};

export default function ButtonIcon({ title }: ButtonIconProps) {
  return (
    <Container activeOpacity={0.7}>
      <IconWrapper>
        <Image source={DiscordImg} />
      </IconWrapper>
      <Text>{title}</Text>
    </Container>
  );
}
