import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import "react-native-gesture-handler";

export function HomeCard() {
  return (
    <View style={home.contentContainer}>
      <Image source={require("./images/smamda.webp")} style={home.image} />
      <Text style={home.text}>SMAMDA Tower</Text>
      <Text style={home.price}>Rp.3000 </Text>
    </View>
  ); 
}
export default function HomeContainer() {
  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={home.ad}>
        <Image source={require("./tp.jpeg")} style={home.adImage} />
      </View>
      <HomeCard></HomeCard>
      <HomeCard></HomeCard>
      <HomeCard></HomeCard>
    </ScrollView>
  );
}
const home = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: "90%",
    alignSelf : "center",
    marginTop : "5%",
  },
  image: {
    alignSelf: "center",
    width: "100%",
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: "2%",

  },
  price: {
  color: "#fff",
  fontSize: 18,
  marginBottom: "10%",
  },
  ad: { 
  },
  adImage: {
    height: 256,
  },
});
