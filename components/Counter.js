import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Counter = (props) => {
  const handleCountChange = (value) => {
    props.onCountChange(props.id, value);
  };

  const addToCount = () => {
    handleCountChange(1);
  };
  const subtractFromCount = () => {
    handleCountChange(-1);
  };
  return (
    <View style={styles.counter}>
      <Text style={styles.counterTitle}>{props.title}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, styles.subtract]}
          activeOpacity={0.7}
          disabled={props.count <= 0 ? true : false}
          onPress={subtractFromCount}
        >
          <Text style={styles.buttonIcons}>-</Text>
        </TouchableOpacity>
        <Text style={styles.count}>{props.count}</Text>
        <TouchableOpacity
          style={[styles.button, styles.add]}
          activeOpacity={0.7}
          onPress={addToCount}
        >
          <Text style={styles.buttonIcons}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    backgroundColor: "#4e70cc",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counterTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  count: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    minWidth: 45,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
  },
  button: {
    width: 70,
    height: 65,
    borderRadius: 5,
    backgroundColor: "#05ab31",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcons: {
    fontSize: 80,
    fontWeight: "600",
    color: "#fff",
    lineHeight: 75,
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  add: {
    backgroundColor: "#05ab31",
  },
  subtract: {
    backgroundColor: "#c41606",
  },
});

export default Counter;
