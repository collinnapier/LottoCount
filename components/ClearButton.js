import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

const ClearButton = (props) => {
  const handleButtonPress = () => {
    Alert.prompt(
      "Reset Counts",
      "Are you sure?",
      [
        {
          text: "Reset",
          onPress: props.onReset,
          style: "destructive",
        },
        {
          text: "Cancel",
          onPress: () => console.log("Reset Cancelled."),
          style: "cancel",
        },
      ],
      "default"
    );
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleButtonPress}
      >
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: "#c41606",
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default ClearButton;
