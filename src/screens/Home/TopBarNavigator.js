import * as React from 'react';
import { StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Home } from "./index";
import { TvShows } from "./TvShows";
import { Movies } from "./Movies";
import { Kids } from "./Kids";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const statusBarHigh = StatusBar.currentHeight || 0;

    return (
        <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={{
                tabBarStyle: {
                  backgroundColor: '#232F3E', // Cor de fundo da top bar
                },
                tabBarLabelStyle: {
                  fontSize: 16, // Tamanho da fonte das labels
                },
                tabBarActiveTintColor: 'white', // Cor da label ativa
              }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{tabBarLabel: "Home"}}
            />

            <Tab.Screen 
                name="TvShows"
                component={TvShows}
                options={{tabBarLabel: "TV Shows"}}
            />

            <Tab.Screen 
                name="Movies"
                component={Movies}
                options={{tabBarLabel: "Movies"}}
            />

            <Tab.Screen 
                name="Kids"
                component={Kids}
                options={{tabBarLabel: "Kids"}}
            />

        </Tab.Navigator>
    )
}

export default function TopBarNavigator() {
    return <MyTabs />
};