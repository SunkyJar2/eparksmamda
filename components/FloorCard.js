import React, { useState, useEffect } from "react";
import { TouchableHighlight } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";

export default function FloorCard(props) {
  const [used, setUsed] = useState(props.used);
  useFonts({
    Krona: require("../assets/fonts/KronaOne-Regular.ttf"),
  });
  useEffect(() => {
    setUsed(props.used);
  }, [props.used]);

  const getAvailableState = () => {
    if (used === 0) {
      return "low";
    }
    if (used === 1) {
      return "mid";
    }
    if (used === 2) {
      return "high";
    }
  };

  const availableState = getAvailableState();
  const stateStyles = floorCard[availableState];

  return (
    <TouchableHighlight style={[floorCard.card, stateStyles]}>
      <View>
        <Text style={floorCard.h1}>Lt.{props.floor}</Text>
        <Text style={floorCard.h2}>
          {props.used}/{props.slot}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

const floorCard = StyleSheet.create({
  card: {
    paddingVertical: "2%",
    paddingHorizontal: "3%",
    borderRadius: 12,
    marginVertical: "2%",
  },
  low: {
    backgroundColor: "#14AE3F",
  },
  mid: {
    backgroundColor: "#FFAD39",
  },
  high: {
    backgroundColor: "#C10A0A",
  },
  h1: {
    alignSelf: "flex-start",
    fontSize: 40,
    color: "#FFFFFF",
    fontFamily: "Krona",
    margin: "2%",
  },
  h2: {
    fontSize: 30,
    color: "#FFFFFF",
    margin: "2%",
    marginTop: "20%",
    marginBottom: "2%",
  },
});
