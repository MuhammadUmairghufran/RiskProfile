import React from 'react';
import { render } from '@testing-library/react-native';
import QuestionScreen from '../QuestionScreen';

describe('QuestionScreen Snapshot Test', () => {
    it('should match snapshot', () => {
        const { toJSON } = render(<QuestionScreen />);
        expect(toJSON()).toMatchSnapshot();
    });
});
