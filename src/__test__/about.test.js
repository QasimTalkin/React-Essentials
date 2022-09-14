import React from 'react';
import { render, cleanup } from '@testing-library/react'; 
import About from '../components/Organism/About'
import pokemon from './data/pokemon'

const mockCurrentPokemon = jest.fn();
const mockSetPokemon = jest.fn();





afterEach(cleanup);

describe('About Component renders correctly', () => {

  it ('renders correctly', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
  

});