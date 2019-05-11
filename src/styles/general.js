import { Platform } from 'react-native';
import styled from 'styled-components/native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

import colors from './colors';

/**
 * Global styles
 */
export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: stretch;
  justify-content: center;
  padding-top: ${(Platform.OS === 'ios') ? getStatusBarHeight : 0};
  padding-bottom: ${(Platform.OS === 'ios') ? getBottomSpace : 0};
  /* padding-right: 10%; */
  /* padding-left: 10%; */
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-top: 15px;
  margin-right: 10%;
  margin-left: 10%;
`;

export const ButtonText = styled.Text`
  color: ${colors.black};
  font-weight: bold;
  font-size: 25;
`;
