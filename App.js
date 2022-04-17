import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import WelcomeScreen from "./app/screens/WelcomeScreen";
import CameraScreen from "./app/screens/Camera";



export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName = "WelcomeScreen">
    <Stack.Screen name = "WelcomeScreen" component = {WelcomeScreen}></Stack.Screen>
    <Stack.Screen name = "CameraScreen" component = {CameraScreen}></Stack.Screen>
  </Stack.Navigator>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
});
