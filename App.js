import React from "react";
import { YellowBox } from "react-native";
import { firebaseApp } from "./app/utils/firebase";
import Navigations from "./app/navigations/Navigations";

YellowBox.ignoreWarnings(["Setting a timer"]);

export default function App() {
  return <Navigations />;
}
