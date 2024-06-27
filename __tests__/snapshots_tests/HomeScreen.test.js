import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../../src/screens/HomeScreen';

describe('HomeScreen Snapshot Test', () => {
    it('should match snapshot', () => {
        const { toJSON } = render(<HomeScreen />);
        expect(toJSON()).toMatchSnapshot();
    });
});
