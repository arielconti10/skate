import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 60px 30px;
  background-color: #FFF;
`;

export const Logo = styled.Text`
  font-size: 48px;
  text-transform: uppercase;
  color: #000;
`

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
`

export const FormInput = styled.TextInput`
  height: 50px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #CCC;
  margin-bottom: 10px;
  padding: 0 15px;
  font-size: 24px;
  margin-bottom: 20px;
`

export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background-color: #7159c1;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

export const ButtonText = styled.Text`
  font-size: 24px;
  color: #FFF;
  text-transform: uppercase;
`

export const RegisterButton = styled.TouchableOpacity`
  margin-top: 20px;
  height: 50px;
  width: 100%;
`

export const RegisterButtonText = styled.Text`
  font-size: 16px;
  color: #7159c1;
`

export const SocialButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`

export const SocialLoginButton = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #7159c1;
  align-items: center;
  margin: 0 15px;
  justify-content: center;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #7159c1;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const UseSocialMediaText = styled.Text`
  width: 100%;
  font-size: 16px;
  color: #000;
  padding-top: 10px;
  text-align: center;
  margin-bottom: 10px;
`