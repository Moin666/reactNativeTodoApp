import * as React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoApp from './pages/todo/todo';
import Home from './pages/home';
import NestedCard from './pages/nestedCard';
import CardDetails from './pages/carddetails';


const Stack = createNativeStackNavigator();   

function AppNavigation() {
  return (
    <NavigationContainer>   
      <Stack.Navigator>
        <Stack.Screen name="Darz App" component={Home} />
        <Stack.Screen name="Cards" component={NestedCard} />
        <Stack.Screen name="carddetails" component={CardDetails} />
        <Stack.Screen name="todo" component={TodoApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;