import React from 'react';
import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen name="SignIn" component={() => <View />} />
    </Navigator>
  );
};

export default AuthRoutes;
