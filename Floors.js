import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import "react-native-gesture-handler";
function FloorCard(){
  return (
    <View style={floor.card}></View>
  );
}
export default function Floors() {

  // Show AppLoading until fonts are loaded
  return (
    <ScrollView>
      <FloorCard></FloorCard>
    </ScrollView>
  );
}
const floor = StyleSheet.create({
  container:{
    marginVertical: "10%",
    marginHorizontal: "10%",
  },
  card: {
    width: 100,
    height:100,
    backgroundColor: "#FFFFFF"
  }
});
