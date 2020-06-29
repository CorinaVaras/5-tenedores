import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";

export default function UserGuest() {
  return (
    <ScrollView centerContent={true} style={style.viewBody}>
      <Image
        source={require("../../../assets/img/original.jpg")}
        resizeMode="contain"
        style={style.image}
      />
      <Text style={style.title}>Ver mi perfil</Text>
      <Text style={style.description}>
        ¿Como describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado más y
        comenta como ha sito tu experiencia.
      </Text>
      <View style={style.viewBtn}>
        <Button
          title="Ver tu perfil"
          buttonStyle={style.btnStyle}
          containerStyle={style.btnContainer}
          onPress={() => console.log("click")}
        />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#00a680",
  },
  btnContainer: {
    width: "70%",
  },
});
