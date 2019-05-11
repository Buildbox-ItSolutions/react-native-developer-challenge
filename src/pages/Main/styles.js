import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 10%;
  margin-left: 10%;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 35;
  font-style: italic;
  text-align: center;
`;

export const Search = styled.View`
  background-color: ${colors.white};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 5%;
  padding-left: 5%;
  margin-top: 15px;
  margin-right: 10%;
  margin-left: 10%;
`;

export const Input = styled.TextInput`
  color: ${colors.black};
  font-size: 25;

`;
