import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import "react-native-gesture-handler";
import HomeCard from "./HomeCard";

export default function HomeContainer() {
  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={home.ad}>
        <Image source={require("../images/tp.jpeg")} style={home.adImage} />
      </View>
      <HomeCard></HomeCard>
    </ScrollView>
  );
}
const home = StyleSheet.create({
  ad: {},
  adImage: {
    height: 128,
  },
});
