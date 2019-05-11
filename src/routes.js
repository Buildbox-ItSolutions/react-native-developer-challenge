import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors } from '~/styles';
import Main from './pages/Main';
import Results from './pages/Results';

export default createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        header: null,
        headerStyle: {
          backgroundColor: colors.header,
        },
      },
    },
    Results: {
      screen: Results,
      navigationOptions: {
        title: 'Resultados',
        headerTintColor: colors.white,

        headerBackgroundTransitionPreset: 'fade',
        headerStyle: {
          backgroundColor: colors.header,
        },
      },
    },
  }),
);
