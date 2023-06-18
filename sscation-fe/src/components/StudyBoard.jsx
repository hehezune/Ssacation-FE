
import React from 'react';

import ProblemRandomSelect from './ProblemRandomSelect';
import SelectedProblem from './SelectedProblem';
import { useSelector } from 'react-redux';
import './StudyBoard.css';

function StudyBoard() {
    const currentGroup = useSelector((state) => state.currentGroup);
    return (
        // <ThemeProvider theme={theme}>
        <main>
            <div>{currentGroup}</div>
            <ProblemRandomSelect />
            <SelectedProblem />
        </main>
        // </ThemeProvider>
    )
}



export default StudyBoard;