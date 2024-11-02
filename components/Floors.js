import React from "react";
import { TouchableHighlight } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import "react-native-gesture-handler";
import FloorCard from "./FloorCard";
export default function Floors() {
  // Show AppLoading until fonts are loaded
  return (
    <ScrollView style={floor.container}>
      <FloorCard floor="1" used={0} slot={2}></FloorCard>
      <FloorCard floor="2" used={1} slot={2}></FloorCard>
    </ScrollView>
  );
}
const floor = StyleSheet.create({
  container: {
    marginVertical: "5%",
    marginHorizontal: "3%",
  },
});
