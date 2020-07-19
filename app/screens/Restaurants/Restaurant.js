import React from "react";
import { View, Text } from "react-native";

export default function Restaurant(props) {
  const { navigation, route } = props;
  const { id, name } = route.params;

  navigation.setOptions({ title: name });
  return (
    <View>
      <Text>RESTAURANTE INFO</Text>
    </View>
  );
}
