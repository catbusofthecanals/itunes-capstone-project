import React from "react";
import Help from "../components/Help/Help";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
//import BrowserRouter to successfully render <Link> in heading

// snapshot test of help component
test("renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Help />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
