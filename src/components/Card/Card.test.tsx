import { render } from '@testing-library/react';
import React from 'react';
import Card, { CardProps } from './Card';

describe('Card', () => {
    const defaultProps: CardProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Card {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Card')).toBeTruthy();
    });
});
