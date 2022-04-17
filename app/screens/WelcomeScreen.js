import React from "react";

import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Button
} from "react-native";


import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../Images/welcome-background.jpg")}
    >
      <View style={styles.logoContainer}>
      
        <Text style={{ color: "white", fontSize: 24 }}>
          Food Recipies when you need them
        </Text>
      </View>

      <View style = {styles.loginButton}>
        <Button
          title = "Take a picture"
          color = "white"
          onPress={() => props.navigation.navigate("CameraScreen")}
        >
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 80,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
