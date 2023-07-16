import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header/Header";
import { BrowserRouter } from "react-router-dom";
//import BrowserRouter to successfully render <Link> in heading

// unit test test to test heading "iTunes" is rendered on page
test("renders iTunes Search heading", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const div = screen.getByText("iTunes Search");
  expect(div).toBeInTheDocument();
});
