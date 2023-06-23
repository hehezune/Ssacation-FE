import React from 'react';
import { Stack, Paper} from '@mui/material';
import { styled } from '@mui/material/styles';
import './SelectedProblem.css';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    width: '350px'
  }));

const problems = [{
    rank: '',
    number: '8972',
    title : '미친 아두이노',
    type: ''
}]
function ProblemRandomSelect() {
    return (
        <Stack>
            {
                problems.map(problem => {
                    return (
                        <Item key={problem.number}>
                            <div className='rank'>{problem.rank}</div>
                            <div className='number'>{problem.number}</div>
                            <div className='title'>{problem.title}</div>
                            <div className='type'>{problem.type}</div>
                        </Item>
                    )
                })
            }
        </Stack>
    )
}

export default ProblemRandomSelect;