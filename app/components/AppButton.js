import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    width: "100%",
    padding: 15,
  },

  text: {
    color: colors.text1,
    fontSize: 18,
    fontWeight: "bold",
  },
});
