import {render, screen} from '@testing-library/react-native';
import React from 'react';
import Details, {DetailsProps} from './Details';

describe('Details', () => {
  const defaultProps: DetailsProps = {
    artId: '',
  };

  it('should render', () => {
    const props = {...defaultProps};
    const {queryByText} = render(<Details {...props} />);

    expect(screen.toJSON()).toMatchSnapshot();
    expect(queryByText('Details')).toBeTruthy();
  });
});
