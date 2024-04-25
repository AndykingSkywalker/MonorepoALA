import { render, screen } from "@testing-library/react";
import Home from "../Components/Home";

jest.mock("axios");

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
  }));

test('check for flipper', () => {
render(<Home/>);
const homeElement = screen.getByText(/Flipper, the Finclusive Dolphin/);
expect(homeElement).toBeInTheDocument();
});