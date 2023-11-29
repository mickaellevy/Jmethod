import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListBorder from '../Components/ListBorder';
import AlterRevision from '../Components/AlterRevision';

class Navigation extends React.Component {

  render() {
    const Stack = createNativeStackNavigator();
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListBorder" screenOptions={{headerShown: false}}>
        <Stack.Screen name="revisions" component={ListBorder} />
        <Stack.Screen name="alterRevision" component={AlterRevision} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default Navigation

