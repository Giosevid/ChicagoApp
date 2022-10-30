import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Home from './Home';

describe('Home', () => {
  it('should render', () => {
    const {queryByText} = render(<Home />);

    expect(screen.toJSON()).toMatchSnapshot();
    expect(queryByText('Home')).toBeTruthy();
  });
});
