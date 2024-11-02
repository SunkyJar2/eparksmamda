import React, { useState, useEffect } from "react";
import { TouchableHighlight } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import "react-native-gesture-handler";

export default function FloorCard(props) {
  const [used, setUsed] = useState(props.used);

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
    flex: 1,
    paddingVertical: "2%",
    paddingHorizontal: "3%",
    borderRadius: 3,
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
    fontSize: 20,
    color: "#FFFFFF",
  },
  h2: {
    fontSize: 10,
    color: "#FFFFFF",
  },
});
