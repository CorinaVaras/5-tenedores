import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
import Loading from "../../components/loading";

export default function Account() {
  const [login, setlogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setlogin(false) : setlogin(true);
    });
  }, []);

  if (login === null) return <Loading />;

  return login ? <UserLogged /> : <UserGuest />;
}
