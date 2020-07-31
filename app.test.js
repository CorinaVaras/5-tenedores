import React from "react";
import renderer from "react-test-renderer";

import App from "./App";

test("App snapShot", () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot();
});
