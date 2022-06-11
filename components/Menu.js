import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Soundboard from '../components/Soundboard';
import Params from '../components/Params';
import FreeSound from '../components/FreeSound';

/***
 * Implementation of the Stack Navigator which allows me to make transitions between pages of my mobile app
 * This will be the menu that the user can use once he presses one of the buttons of the soundboard.
 * */
const Menu = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Soundboard"
                          component={Soundboard}
                          options={{
                              title: 'Soundboard',
                              headerStyle: {
                                  backgroundColor: '#1c2564',
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
                                  backgroundColor: '#1c2564',
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
                                  backgroundColor: '#1c2564',
                              },
                              headerTintColor: 'white',
                              headerTitleStyle: {
                                  fontWeight: 'bold',
                              },
                          }}
            />
        </Stack.Navigator>
    );
}

export default Menu;
