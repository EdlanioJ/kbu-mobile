import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { View } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen name="SignIn" component={() => <View />} />
    </Navigator>
  );
};

export default AuthRoutes;
