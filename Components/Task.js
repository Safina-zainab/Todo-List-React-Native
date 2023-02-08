import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Task = () => {
  return (
    <View style={styles.item}>
      <View style={styles.itemContainer}>
        <View style={styles.square}></View>
        <Text style={styles.textContainer}> New task </Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#87ceeb",
    opacity: 0.4,
    borderRadius: 5,
  },
  textContainer: {
    color: "black",
    fontSize: 15,
    backgroundColor: "white",
    padding:5,
    margin: 10,
    borderRadius: 10,
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: "#87ceeb",
    borderWidth: 2,
    borderRadius: 5,
  },
});
export default Task;
