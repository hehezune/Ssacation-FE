
import React from 'react';

import ProblemRandomSelect from './ProblemRandomSelect';
import SelectedProblem from './SelectedProblem';
import './StudyBoard.css';

function StudyBoard() {
    return (
        // <ThemeProvider theme={theme}>
        <main>
            <ProblemRandomSelect />
            <SelectedProblem />
        </main>
        // </ThemeProvider>
    )
}



export default StudyBoard;