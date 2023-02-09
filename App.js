import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from 'react';
import { TextInput } from "react-native-gesture-handler";
import Task from "./Components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemCopy = [...taskItem];
    itemCopy.splice(index, 1);
    setTaskItem(itemCopy);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Todo List</Text>
      <View style={styles.taskWapper}>
        {
          taskItem.map((item, index) => {

            return (
              < TouchableOpacity key={index} onPress = {() => completeTask(index)}>
              <Task  text={item} />
              </TouchableOpacity>
            ) 
          })
        }
        {/* <Task text={"Current task"} />
        <Task text={"Second task"} /> */}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Enter your Task"}  value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 10,
    width: 280,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "#87ceeb",
    borderWidth: 1,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#87ceeb",
    borderWidth: 1,
  },
  addText: {
    fontSize: 25,
  }
});
