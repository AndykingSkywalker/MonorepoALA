import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

jest.mock("axios");

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
  }));

test('renders contact us!', () => {
    render(<ContactForm/>);
    const contactUsElement = screen.getByText(/Contact us!/);
    expect(contactUsElement).toBeInTheDocument();
});