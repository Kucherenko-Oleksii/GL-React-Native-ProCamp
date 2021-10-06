import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../../containers/Main';


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Main} />
    </Stack.Navigator>
  );
}
