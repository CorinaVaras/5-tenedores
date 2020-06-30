import React from "react";
import { Text, View, Button } from "react-native";
import * as firebase from "firebase";

export default function UserLogged() {
  return (
    <View>
      <Text> UserGuest ... </Text>
      <Button title="Cerrar Sesión" onPress={() => firebase.auth().signOut()} />
    </View>
  );
}
