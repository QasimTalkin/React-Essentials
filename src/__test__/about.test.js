import React from 'react';
import { render, cleanup } from '@testing-library/react'; 
import About from '../components/Organism/About'

afterEach(cleanup);

describe('About Component renders correctly', () => {

  it ('renders correctly', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  test('rendered image contains alt text', ()=> {
  
    const { getByAltText } = render(<About />);
    const image = getByAltText(/pic/i);
    expect(image).toBeInTheDocument();
  });
  
});