import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import "react-native-gesture-handler";
import HomeContainer from "./components/Home";
import Navbar from "./components/Navbar";
import Floors from "./components/Floors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
export default function App() {
  const [fontsLoaded] = useFonts({
    Krona: require("./assets/fonts/KronaOne-Regular.ttf"),
  });

  // Wait until fonts are loaded before rendering
  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
