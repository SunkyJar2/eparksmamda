import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function HomeCard() {
  return (
    <View style={homeCard.contentContainer}>
      <Image source={require("../images/smamda.webp")} style={homeCard.image} />
      <Text style={homeCard.text}>SMAMDA Tower</Text>
      <Text style={homeCard.price}>Rp.3000</Text>
    </View>
  );
}

const homeCard = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    marginTop: "5%",
  },
  image: {
    alignSelf: "center",
    width: "100%",
    height: 256,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: "2%",
  },
  price: {
    color: "#fff",
    fontSize: 18,
    marginBottom: "10%",
  },
});
