import React from 'react';
import { Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

import { 
  Container,
  Logo,
  Form,
  FormInput,
  SubmitButton,
  ButtonText, 
  RegisterButton,
  RegisterButtonText,
  SocialButtonsContainer,
  SocialLoginButton,
  Separator,
  UseSocialMediaText,
} from './styles';
import { useAuth } from '../../hooks/auth';

export default function SignIn() {
  const { signInWithGoogle } = useAuth();

  return (
    <Container>
      <Logo>Skate</Logo>

      <Form>
        <FormInput placeholder="Digite seu e-mail" />
        <FormInput placeholder="Digite sua senha" />

        <SubmitButton title="Entrar">
          <ButtonText>Entrar</ButtonText>
        </SubmitButton>
        
        <RegisterButton onPress={() => {}}>
          <RegisterButtonText>Ainda não tem uma conta? Registre-se</RegisterButtonText>
        </RegisterButton>
      
        <Separator />

        <UseSocialMediaText>Ou se conecte usando as redes sociais</UseSocialMediaText>

        <SocialButtonsContainer>
          <SocialLoginButton 
            title="Login"
            onPress={() => signInWithGoogle()}
          > 
            <Text>G</Text> 
          </SocialLoginButton>
          <SocialLoginButton> 
            <Text>F</Text>
          </SocialLoginButton>
          <SocialLoginButton> 
            <Text>T</Text> 
          </SocialLoginButton>
        </SocialButtonsContainer>
      </Form>
    </Container>
  );
}