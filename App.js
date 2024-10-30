import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import "react-native-gesture-handler";
import HomeContainer from "./Home";
import Navbar from "./Navbar";
export default function App() {
  return (
    <View style={styles.container}>
      <Navbar></Navbar>
      <View style={styles.header}>
        <Text style={styles.textHeading}>Surabaya</Text>
      </View>
      <View style={{ flex: 10, width: "100%" }}>
        <HomeContainer></HomeContainer>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1.5,
    backgroundColor: "#000000",
    width: "100%",
  },
  textHeading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: "auto",
    marginLeft: "4%",
  },

  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: "auto",
  },
  button: {
    backgroundColor: "#04070d",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 50,
  },
});

