import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import HomeContainer from "./components/Home";
import Navbar from "./components/Navbar";
import Floors from "./components/Floors";
import * as Font from "expo-font";
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Krona: require("./assets/fonts/KronaOne-Regular.ttf"),
    }).then(() => setFontsLoaded(true));
  }, []);
  if (!fontsLoaded) {
    // Avoid disrupting hook order by placing this condition in the return statement
    return <View />;
  }
  // Wait until fonts are loaded before rendering

  return (
    <View style={styles.container}>
      <Navbar></Navbar>
      <View style={styles.header}>
        <Text style={styles.textHeading}>Surabaya</Text>
      </View>
      <View style={{ flex: 10, width: "100%" }}>
        <Floors></Floors>
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
    fontSize: 30,

    marginVertical: "auto",
    marginLeft: "4%",
    fontFamily: "Krona",
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
  ad: {
    flex: 4,
    height: "25%",
    width: "100%",
    backgroundColor: "#50c773",
  },
});
