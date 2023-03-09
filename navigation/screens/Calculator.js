import * as React from "react";
import { Stlyesheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LineChart } from "react-native-chart-kit";

export default function Calculator({ navigation }) {
  return (
    <View
      onPress={() => navigation.navigate("Home")}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text

      //style={{ fontSize: 24, fontWeight: "bold" }}
      >
        This is the Calculator Screen
      </Text>
    </View>
  );
}
