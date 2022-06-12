import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Soundboard from '../components/Soundboard';
import Params from '../components/Params';
import FreeSound from '../components/FreeSound';

/***
 * Implementation of the Stack Navigator which allows me to make transitions between pages of my mobile app
 * This will be the menu that the user can use once he presses one of the buttons of the soundboard.
 * */
const Menu = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Soundboard">
            <Stack.Screen name="Soundboard"
                          component={Soundboard}
                          options={{
                              title: 'Soundboard',
                              headerStyle: {
                                  backgroundColor: '#592304',
                              },
                              headerTintColor: 'white',
                              headerTitleStyle: {
                                  fontWeight: 'bold',
                              },
                          }}
                          />
            <Stack.Screen name="Params"
                          component={Params}
                          options={{
                              title: 'Soundboard - Paramètres',
                              headerStyle: {
                                  backgroundColor: '#592304',
                              },
                              headerTintColor: 'white',
                              headerTitleStyle: {
                                  fontWeight: 'bold',
                              },
                          }}
            />

            <Stack.Screen name="FreeSound"
                          component={FreeSound}
                          options={{
                              title: 'Soundboard - Trouver un son dans la librairie FreeSound',
                              headerStyle: {
                                  backgroundColor: '#592304',
                              },
                              headerTintColor: 'white',
                              headerTitleStyle: {
                                  fontWeight: 'bold',
                              },
                          }}
            />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Menu;
