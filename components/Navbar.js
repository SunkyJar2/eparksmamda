import React from "react";

import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function Navbar() {
  const [fontsLoaded] = useFonts({
    Righteous: require("../assets/fonts/Righteous-Regular.ttf"),
  });

  // Wait until fonts are loaded before rendering
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={nav.navbar}>
      <View>
        <Text style={nav.textHeading}>e-Park</Text>
      </View>
    </View>
  );
}
export const nav = StyleSheet.create({
  navbar: {
    flex: 1.5,
    backgroundColor: "#005DE8",
    width: "100%",
    paddingVertical: "2%",
  },
  textHeading: {
    color: "#fff",
    fontSize: 30,

    fontFamily: "Righteous",
    marginLeft: "4%",
    marginVertical: "2%",
  },
});
