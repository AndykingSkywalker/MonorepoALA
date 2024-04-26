import { BrowserRouter as Router } from 'react-router-dom';
import Basket from '../Components/Basket/Basket';
import { render, screen } from '@testing-library/react';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { items: [] } })),
  patch: jest.fn(() => Promise.resolve())
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1'
  }),
  useNavigate: () => jest.fn()
}));

describe('Basket', () => {
  test('renders Basket component', () => {
    render(
      <Router>
        <Basket />
      </Router>
    );
    expect(screen.getByLabelText(/basket page/i)).toBeInTheDocument();
  });
});