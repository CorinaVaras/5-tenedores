import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-easy-toast";

import { firebaseApp } from "../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

const TopRestaurants = (props) => {
  const { navigation } = props;
  const [restaurant, setRestaurant] = useState([]);
  const ToastRef = useRef();

  //Obtener los restaurantes top 5
  useEffect(() => {
    db.collection("restaurants")
      .orderBy("rating", "desc")
      .limit(5)
      .get()
      .then((response) => {
        const restaurantArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          restaurantArray.push(data);
        });
        setRestaurants(restaurantArray);
      });
  }, []);

  return (
    <View>
      <Text> Top restaurants</Text>
      <Toast ref={ToastRef} position="center" opacity={0.9} />
    </View>
  );
};

export default TopRestaurants;

const styles = StyleSheet.create({});
