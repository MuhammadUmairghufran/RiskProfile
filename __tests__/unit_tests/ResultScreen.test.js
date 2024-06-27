import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ResultScreen from '../ResultScreen';

describe('ResultScreen', () => {
    it('renders score and handles restart', () => {
        const navigationMock = { navigate: jest.fn() };
        const { getByText } = render(<ResultScreen navigation={navigationMock} />);

        expect(getByText('Your Risk Profile Score:')).toBeDefined();
        expect(getByText('Your Risk Profile Category:')).toBeDefined();
        fireEvent.press(getByText('Restart Questionnaire'));
        expect(navigationMock.navigate).toHaveBeenCalledWith('Home');
    });
});
