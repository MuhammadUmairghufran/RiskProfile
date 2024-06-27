/**
 * Returns the risk category based on the provided score.
 * @param {number} score - The total score to categorize.
 * @returns {string} - The risk category ('Low', 'Medium', or 'High').
 */
export const getCategory = (score) => {
    if (score <= 7) return 'Low';
    if (score <= 12) return 'Medium';
    return 'High';
};

/**
 * Calculates the total score by summing up all answers.
 * @param {number[]} answers - Array of scores from each question.
 * @returns {number} - Total score calculated from the sum of all answers.
 */
export const totalScore = (answers) => answers.reduce((total, answer) => total + answer, 0);