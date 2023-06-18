import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Divider, Stack, Chip, Slider, TextField, Autocomplete } from '@mui/material';
import React from 'react';
import PlusIcon from '@mui/icons-material/Add';
import algorithmType from '../assets/AlgorithmType';

// import { ThemeProvider, createTheme } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function StudyBoard() {
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
        tierRange;
        numberOfProblems;
        algoType;
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