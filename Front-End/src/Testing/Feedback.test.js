import { render, screen } from "@testing-library/react";
import Feedback from "../Components/Admin/Feedback";

jest.mock("axios");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("test to see if Customer Issues renders", async () => {
  render(<Feedback/>);
  const feedbackElement = await screen.findByText(/Customer Issues/);
  expect(feedbackElement).toBeInTheDocument();
});
