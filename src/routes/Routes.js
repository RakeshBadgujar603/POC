import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notification from "../screens/Notification";
import Home from "../screens/Home";
import SplashScreen from "../screens/SplashScreen";
import Login from "../screens/Login";
import Todoo from "../screens/Todoo";
import NewScreen from "../screens/NewScreen";

const Stack =createNativeStackNavigator();

function Routes(){
    return(
  
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                
                <Stack.Screen
                name="Notification"
                component={Notification}
                options={{headerShown:false}}
                />

                <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown:false}}
                />

                <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown:false}}
                />

                <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown:false}}
                />

                <Stack.Screen
                name="Todoo"
                component={Todoo}
                options={{headerShown:false}}
                />

                <Stack.Screen
                name="NewScreen"
                component={NewScreen}
                options={{headerShown:false}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes