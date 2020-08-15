import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '../src/pages/Dashboard';
import Initialcreen from '../src/pages/Initialscreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Initialcreen} />
        <Drawer.Screen name="Dados" component={Dashboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
