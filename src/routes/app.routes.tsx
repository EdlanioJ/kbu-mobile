import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BottomTabRoutes from './bottomTab.routes';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="BottomTab" component={BottomTabRoutes} />
    </Navigator>
  );
};

export default AppRoutes;
