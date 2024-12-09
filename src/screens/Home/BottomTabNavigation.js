import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack";
import TopBarNavigator from "./TopBarNavigator";

import { MoviePage } from "../Search/moviePage";
import { Settigs } from "../Settings/Settings";
import { Search } from "../Search/Search";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Main page'
            screenOptions={{
                activeTintColor: '#e91e63',
                headerShown: false,
                tabBarStyle: {
                    
                }
            }}
        >
            <Tab.Screen 
                name="Settings"
                component={Settigs}
                options={{
                    tabBarIcon: () => {
                        return <Ionicons name="settings" color="blue" size={20} />
                     }
                }}
            />

            <Tab.Screen
                name="Main page"
                component={TopBarNavigator}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: () => {
                       return <Ionicons name="home" color="blue" size={20} />
                    }
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: () => {
                        return <Ionicons name="search" color="blue" size={20} />
                     }
                }}
            />

        </Tab.Navigator>
    );
}

export default function BottomTabNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                {/* Abas como parte do Stack Navigator */}
                <Stack.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />

                {/* Tela Fora das Abas */}
                <Stack.Screen name="MoviePage" component={MoviePage} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}