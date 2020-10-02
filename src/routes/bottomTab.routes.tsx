import React from 'react';
import { StyleSheet } from 'react-native';

import { AntDesign, Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ComingSoon from '../pages/ComingSoon';
import Home from '../pages/Home';
import Wallet from '../pages/Wallet';

const TabBottom = createBottomTabNavigator();

const BottomTabRoutes: React.FC = () => {
  return (
    <TabBottom.Navigator
      tabBarOptions={{
        labelPosition: 'below-icon',
        keyboardHidesTabBar: true,
        style: {
          height: 60,
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: '#f8f8f8',
          backgroundColor: '#fff',
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Roboto400',
          fontSize: 11,
          marginTop: 5,
        },
        activeTintColor: '#60c25f',
        inactiveTintColor: '#999',
      }}
    >
      <TabBottom.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
        component={Home}
      />
      <TabBottom.Screen
        name="Wallet"
        options={{
          tabBarLabel: 'Carteira',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="wallet" color={color} size={size} />
          ),
        }}
        component={Wallet}
      />
      <TabBottom.Screen
        name="Payment"
        options={{
          tabBarLabel: 'Pagar',
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="dollar" color={color} size={size} />
          ),
        }}
        component={ComingSoon}
      />
      <TabBottom.Screen
        name="Notification"
        options={{
          tabBarLabel: 'Notificação',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="bells" color={color} size={size} />
          ),
        }}
        component={ComingSoon}
      />
      <TabBottom.Screen
        name="Setting"
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
        component={ComingSoon}
      />
    </TabBottom.Navigator>
  );
};
export default BottomTabRoutes;
