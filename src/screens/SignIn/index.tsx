import React from 'react';
import { Text } from 'react-native';

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

export default function SignIn() {
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
          <SocialLoginButton> 
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