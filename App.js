import React from "react";
import { NativeBaseProvider, Box, Text, Center} from "native-base";
import { MainProvider } from "./src/context";
import { Details, Home } from "./src/page";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <MainProvider>
            <NativeBaseProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='Home'>
                        <Stack.Screen 
                            name="Home" 
                            component={Home}
                            options={{title: "Liste des burger"}}
                        />
                        <Stack.Screen name="Details" component={Details} options={{title:"Détails du burger"}}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </MainProvider>
    );
}