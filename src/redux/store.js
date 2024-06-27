import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    answers: [],
};

const questionnaireSlice = createSlice({
    name: 'questionnaire',
    initialState,
    reducers: {
        addAnswer: (state, action) => {
            state.answers.push(action.payload);
        },
        resetAnswers: (state) => {
            state.answers = [];
        },
    },
});

export const { addAnswer, resetAnswers } = questionnaireSlice.actions;

const store = configureStore({
    reducer: {
        questionnaire: questionnaireSlice.reducer,
    },
});

export default store;
