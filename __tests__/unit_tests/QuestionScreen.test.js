import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import QuestionScreen from '../QuestionScreen';

describe('QuestionScreen', () => {
    it('renders question and handles answer selection', () => {
        const navigationMock = { navigate: jest.fn() };
        const { getByText } = render(<QuestionScreen navigation={navigationMock} />);

        expect(getByText('Question 1')).toBeDefined();
        fireEvent.press(getByText('Option A'));
        expect(navigationMock.navigate).toHaveBeenCalledWith('Result');
    });
});
