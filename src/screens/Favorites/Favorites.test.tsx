import { render } from '@testing-library/react';
import React from 'react';
import Favorites, { FavoritesProps } from './Favorites';

describe('Favorites', () => {
    const defaultProps: FavoritesProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Favorites {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Favorites')).toBeTruthy();
    });
});
