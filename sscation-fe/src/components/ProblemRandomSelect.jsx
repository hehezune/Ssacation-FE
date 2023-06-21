import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Divider, Stack, Chip, Slider, TextField, Autocomplete } from '@mui/material';
import React from 'react';
import PlusIcon from '@mui/icons-material/Add';
import algorithmType from '../assets/AlgorithmType';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

const tier = ['B5', 'B4', 'B3', 'B2', 'B1', 'S5', 'S4', 'S3', 'S2', 'S1', 'G5', 'G4', 'G3', 'G2', 'G1', 'P5'];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
    const studyGroup = useSelector(state => state.group);
    const [tierRange, setTireRange] = React.useState([5, 10]);
    const [numberOfProblems, setNumberOfProblems] = React.useState([5, 6]);
    const [algoType, setAlgoType] = React.useState([]);
    const algoRef = React.useRef();

    const handleDelete = (event, idx) => {
        const newAlgoType = algoType.slice();
        // console.log(event)
        newAlgoType.splice(idx, 1);
        setAlgoType(newAlgoType);
    };

    const handleChange = (event, newValue) => {
        setTireRange(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };

    const handleAlgoAdd = (event) => {
        const newAlgoType = algoType.slice();
        const newAlgo = algoRef.current.getElementsByTagName('input')[0].value;
        newAlgoType.push(newAlgo);
        setAlgoType(newAlgoType);
        console.log(newAlgoType)
    }

    const handleProblemSelect = (event) => {
        let requestString = `(${getBOJUsers(studyGroup)} ${getTier(tierRange)}) & (${getAlgoType(algoType)})`;
        console.log(requestString);
        // 여기서 이걸 통해 요청
    }

    return (
            <div>
            <div>백준 랜덤 선택기</div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Item>문제 수</Item>
                    </Grid>
                    <Grid item xs={9}>
                        <Slider
                            aria-label="NumberOfProblems"
                            defaultValue={5}
                            // getAriaValueText={valuetext}
                            valueLabelFormat={value => <div>{value + 3}</div>}
                            valueLabelDisplay="auto"
                            step={1}
                            onChange={handleChange2}
                            marks
                            min={1}
                            max={10}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Item>티어</Item>
                    </Grid>
                    <Grid item xs={9}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={tierRange}
                            defaultValue={10}
                            marks
                            min={1}
                            max={16}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            // getAriaValueText={valuetext}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Item>알고리즘</Item>
                    </Grid>
                    <Grid item xs={7.5}>
                        <Autocomplete 
                            disablePortal
                            id="algorithm-select" 
                            options={algorithmType}
                            sx={{ width: 300 }}
                            ref={algoRef}
                            renderInput={(params) => <TextField {...params}  />}
                        />
                    </Grid>
                    <Grid item xs={1.5}>
                        <PlusIcon onClick={handleAlgoAdd}/>
                    </Grid>
                </Grid>
                <Divider>selected Algorithm</Divider>
                <Stack direction="row" flexWrap="wrap">
                    {algoType.map((type, idx) => {
                        return <Chip label={type} onDelete={(event) => handleDelete(event, idx)} key={type}/>
                    })}
                </Stack>
                <button onClick={handleProblemSelect}>시작</button>
            </Box>
            </div>
    )
}



export default StudyBoard;