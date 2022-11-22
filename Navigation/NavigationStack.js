import React from "react";

import Login from "../Screens/Login";
import MenuBebidas from "../Screens/MenuBebidas"

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registrate from "../Screens/Registrate";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title:"SESION",
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                     name="MenuBebidas"
                    component={MenuBebidas}
                />
                <Stack.Screen
                     name="Registrate"
                    component={Registrate}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
