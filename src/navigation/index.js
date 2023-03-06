import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
// import  SignIn  from "../screens/signIn"
// import  SignUp  from "../screens/signUp";
import { SignIn, SignUp, Home, Detail} from "../screens";


const Stack = createNativeStackNavigator();
const Navigation = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SignIn"
                screenOptions={{ headerShown: false }}
            >
               
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
