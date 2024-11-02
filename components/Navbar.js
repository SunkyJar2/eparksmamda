import React from "react";

import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { useFonts } from "expo-font";

export default function Navbar() {
  const [fontsLoaded] = useFonts({
    Righteous: require("../assets/fonts/Righteous-Regular.ttf"),
  });

  return (
    <View style={nav.navbar}>
      <View style={{ marginTop: "10%" }}>
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
    paddingVertical: "5%",
  },
  textHeading: {
    color: "#fff",
    fontSize: 30,

    fontFamily: "Righteous",
    marginLeft: "4%",
  },
});
