import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Slider from '@mui/material/Slider';
import { TextField, Autocomplete } from '@mui/material';
import React from 'react';
import PlusIcon from '@mui/icons-material/Add';

// import { ThemeProvider, createTheme } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },];
// const theme = createTheme({
//     components: {
//         MuiStack: {
//             defaultProps: {
//                 useFlexGap: true,
//             }
//         }
//     }
// })

function StudyBoard() {
    const [rangeValue, setRangeValue] = React.useState([5, 10]);
    const [value, setValue] = React.useState([5, 6]);

    const handleDelete = () => {
        console.info('You clicked the Chip.');
    };

    const handleChange = (event, newValue) => {
        setRangeValue(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };

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
                            value={rangeValue}
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
                            id="combo-box-demo" 
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params}  />}
                        />
                    </Grid>
                    <Grid item xs={1.5}>
                        <PlusIcon/>
                    </Grid>
                </Grid>
                <Divider>selected Algorithm</Divider>
                <Stack direction="row" useFlexgap flexWrap="wrap">
                    <Chip label="BFS" onDelete={handleDelete}/>
                    <Chip label="BFS" onDelete={handleDelete}/>
                    <Chip label="BFS" onDelete={handleDelete}/>
                    <Chip label="BFS" onDelete={handleDelete}/>
                    <Chip label="BFS" onDelete={handleDelete}/>
                </Stack>
                <button>시작</button>
            </Box>
            </div>
    )
}



export default StudyBoard;