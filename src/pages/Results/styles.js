import styled from 'styled-components/native';
import { colors } from '~/styles';

export const NotFound = styled.Text`
  color: ${colors.white};
  font-size: 25;
  font-style: italic;
  text-align: center;
`;

export const Line = styled.View`
  margin-top: 7.5px;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Prefix = styled.Text`
  color: ${colors.prefix};
  font-size: 20;
`;

export const Content = styled.Text`
  color: ${colors.white};
  font-size: 18;
`;
