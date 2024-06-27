import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
    it('renders title and handles navigation on button press', () => {
        const navigationMock = { navigate: jest.fn() };
        const { getByText } = render(<HomeScreen navigation={navigationMock} />);

        expect(getByText('Risk Profile Questionnaire')).toBeDefined();
        fireEvent.press(getByText('Start Questionnaire'));
        expect(navigationMock.navigate).toHaveBeenCalledWith('Question');
    });
});
