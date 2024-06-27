import React from 'react';
import { render } from '@testing-library/react-native';
import ResultScreen from '../ResultScreen';

describe('ResultScreen Snapshot Test', () => {
    it('should match snapshot', () => {
        const { toJSON } = render(<ResultScreen />);
        expect(toJSON()).toMatchSnapshot();
    });
});
