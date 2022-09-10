import {render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../components/Organism/Nav';

describe('Nav Component renders correctly', () => {

  it ('renders correctly', () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Nav bar has home and about links', () => {
    const { getByText } = render(<Nav />);
    const homeLink = getByText(/home/i);
    const aboutLink = getByText(/about/i);
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
  
  it ('contains a logo H2 ReactCoffee', () => {
    const { getByText } = render(<Nav />);
    const logo = getByText(/reactcoffee/i);
    expect(logo).toBeInTheDocument();
  });

});