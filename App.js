import { StyleSheet, Text, View } from "react-native";
import Task from "./Components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Todo List</Text>
      <View style={styles.taskWapper}>
        <Task />
        <Task />
        <Task />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8dc",
  },
  textContainer: {
    color: "black",
    marginTop: 50,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 30,
  },
  taskWapper: {
    margin: 15,
  },
});
