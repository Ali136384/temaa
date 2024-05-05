import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import React from "react";

const { height } = Dimensions.get("window");

export default function AddCat() {
  return (
    <View style={styles.container}>
      <View style={styles.head_contianer}>
        <Image style={styles.fingers} source={require("../cat.png")} />
        <Text style={styles.head_txt1}>Let`s add a new cat!</Text>
        <Text style={styles.head_txt2}>
          Please provide the following details.
        </Text>
      </View>
      <View style={styles.inputs_container}>
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    borderRightColor: "white",
  },
  head_contianer: {
    alignItems: "center",
    marginTop: 10,
  },
  fingers: {
    width: 60,
    height: 60,
  },
  head_txt1: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 25,
  },
  head_txt2: {
    marginTop: 5,
    opacity: 0.7,
  },
  inputs_container: {
    padding: 20,
  },
  label: {
    fontWeight: "500",
    fontSize: 17,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
});
