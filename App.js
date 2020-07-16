import React from "react";
import { YellowBox } from "react-native";
import { firebaseApp } from "./app/utils/firebase";
import Navigations from "./app/navigations/Navigations";
import { decode, encode } from "base-64";

YellowBox.ignoreWarnings(["Setting a timer"]);
if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

export default function App() {
  return <Navigations />;
}
