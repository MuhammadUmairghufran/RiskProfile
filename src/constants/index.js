
import { TEXT } from './staticText';
export { FONT } from './fonts';
export { COLOR } from './color';


export const DEVICE_HEIGHT = 667;
export const DEVICE_WIDTH = 375;
export const X_PHONE_DEVICE_HEIGHT = 812;
export const LONG_DEVICE_HEIGHT = 896;

export const PLATFORM = {
    IOS: 'IOS',
    ANDROID: 'ANDROID',
};


// Buttons texts 
export const QUESTIONAIRE_START_BUTTON_TEXT = "Start Questionnaire";




// Questionaire Questions 
export const questions = [
    {
        question: 'How would you describe your investment knowledge?',
        options: ['Novice', 'Intermediate', 'Advanced'],
        scores: [1, 2, 3],
    },
    {
        question: 'Investment Duration',
        options: ['Short-term (less than 1 year)', 'Medium-term (1-5 years)', 'Long-term (more than 5 years)'],
        scores: [1, 2, 3],
    },
    {
        question: 'How comfortable are you with taking risks?',
        options: ['Very risk-averse', 'Somewhat risk-averse', 'Neutral', 'Somewhat risk-tolerant', 'Very risk-tolerant'],
        scores: [1, 2, 3, 4, 5],
    },
    {
        question: 'What percentage of your income are you willing to invest?',
        options: ['Less than 10%', '10-25%', '25-50%', 'More than 50%'],
        scores: [1, 2, 3, 4],
    },
    {
        question: 'How would you react to a sudden drop in the value of your investments?',
        options: ['Panic and sell immediately', 'Monitor closely and consider selling', 'Hold and wait for recovery', 'See it as a buying opportunity and invest more'],
        scores: [1, 2, 3, 4],
    },
];


export const backgroundColors = [
    '#ffcccc', // Light Red
    '#ccffcc', // Light Green
    '#CBD5E1', // Light Blue
    '#ffffcc', // Light Yellow
    '#ffccff', // Light Pink
    '#ccffff', // Light Cyan
    // Add more colors if there are more questions
];


export const ScoresColors = {
    Low: '#2ecc71',   
    Medium: '#f39c12', 
    High: '#e74c3c',   
};
