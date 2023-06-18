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

function ProblemRandomSelect() {
    return (
        <Stack>
            <Item>
                <div className='rank'></div>
                <div className='number'>8972</div>
                <div className='title'>미친 아두이노</div>
                <div className='type'></div>
            </Item>
        </Stack>
    )
}

export default ProblemRandomSelect;