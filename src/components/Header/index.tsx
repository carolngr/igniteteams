import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import { BackButton, BackIcon, Container, Logo } from "./styles";

import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {
        showBackButton && 
        <BackButton>
          <BackIcon />
        </BackButton>
      }

      
      <Logo
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </Container>
  )
}