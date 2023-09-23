import { render } from "@testing-library/react";
import App from "./App";
import Confirmation from "./components/Confirmation";
import Typography from "@mui/material/Typography";

// Unit test to render application.
test("renders application without crashing", () => {
  render(<App />);
});

// Unit tests for CSS styles.
const cardText = "cardText";
describe("Testing CSS Styles", () => {
  test("Typography", () => {
    render(
      <Typography
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          fontFamily: "Raleway",
          mt: 1,
          mb: 1,
        }}
      >
        {cardText}
      </Typography>
    );
    const card = screen.getByText(cardText);
    expect(card).toHaveStyle({
      marginTop: "1",
    });
  });
});
