import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
export default function Navbar(){
    return(
        <View style={nav.navbar}>
        <View style={{ marginTop: "12%" }}>
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
      },
    textHeading: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: "auto",
        marginLeft: "4%",
    },
  });
  