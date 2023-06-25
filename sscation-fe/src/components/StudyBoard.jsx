import { useState } from 'react';
import ProblemRandomSelect from './ProblemRandomSelect';
import SelectedProblem from './SelectedProblem';
import { useSelector } from 'react-redux';
import './StudyBoard.css';
import axios from 'axios';
let isSelected = true;

// 여기서 axios 요청 함수 만들어서 보내고, 받아와서
// isSelected true 만들고 selectedPb에 보내고 그래야겠는데?
const API_PATH = import.meta.env.VITE_API_PATH_PROBLEMS;
const tier = ['B5', 'B4', 'B3', 'B2', 'B1', 'S5', 'S4', 'S3', 'S2', 'S1', 'G5', 'G4', 'G3', 'G2', 'G1', 'P5'];
const getBOJUsers = function(studyGroup) {
    const currentGroup = studyGroup.studyGroups[studyGroup.currentGroup];
    if (typeof(currentGroup) == 'string') {
        return `-@${currentGroup}`;
    }
    let str = '';
    currentGroup.forEach(user => str + `-@${user} `);
    return str;
}

const getAlgoType = function(algoType) {
    return algoType.map(user => '#' + user).join(' | ');
}

const getTier = function(tierRange) {
    const idx1 = Math.min(...tierRange);
    const idx2 = Math.max(...tierRange);
    return `*${tier[idx1]}..${tier[idx2]}`;
}

function StudyBoard() {
    const [ bojProblems, setBOJproblems ] = useState([]);
    const currentGroup = useSelector((state) => state.currentGroup);

    const handleProblemSelect = (event) => {
        let requestString = `(${getBOJUsers(studyGroup)} ${getTier(tierRange)}) & (${getAlgoType(algoType)})`;
        console.log(requestString);

        axios({
            url: API_PATH,
            method: 'get',
            param: requestString
        }).then((res) => {
            if (res.data.length == 0) {
                alert("조건에 맞는 문제가 없습니다.");
                return ;
            }
            isSelected = true;
            setBOJproblems(res.data)})
        .catch((err) => console.log(err));
    }
    return (
        <main>
            <div>{currentGroup}</div>
            <ProblemRandomSelect onHandle={handleProblemSelect}/>
            {
                isSelected && <SelectedProblem problems={bojProblems}/>
            }
        </main>
    )
}



export default StudyBoard;