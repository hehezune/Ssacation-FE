import { styled } from '@mui/material/styles';
import React from 'react';
import PlusIcon from '@mui/icons-material/Add';
import { Box, Paper, Grid, Divider, Stack, Chip, TextField} from '@mui/material';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/store';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function StudyCreate() {
    const [userNames, setUserName] = React.useState([]);
    const userNameRef = React.useRef();
    const studyNameRef = React.useRef();
    // 시작 버튼 눌렀을때 그룹 등록할 핸들러 - dispatch
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (event, idx) => {
        const newUserNames = userNames.slice();
        // console.log(event)
        newUserNames.splice(idx, 1);
        setUserName(newUserNames);
    }
    
    const handleAddStudy = (event) => {
        const action = {};
        action[studyNameRef.current.value] = userNames;
        dispatch(userActions.createGroup(action));
        navigate('/main')
    }

    const handleAddUser = (event) => {
        if (userNames.includes(userNameRef.current.value)) {
            alert('이미 등록한 아이디입니다.');
            return ;
        }
        const newUserNames = userNames.slice();
        newUserNames.push(userNameRef.current.value);
        setUserName(newUserNames);
        userNameRef.current.value = '';
    }

    const handleUserEnter = (event) => {
        if (event.key == 'Enter') {
            handleAddUser();
        }
    }

    return (
        <div>
            <div>신규 스터디 생성</div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Item>이름</Item>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField id="studyName" inputRef={studyNameRef} label="스터디 이름" varient="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <Item>스터디원</Item>
                    </Grid>
                    <Grid item xs={7.5}>
                        <TextField id="bojName" inputRef={userNameRef} label="등록할 유저" varient="outlined" onKeyDown={handleUserEnter}/>
                    </Grid>
                    <Grid item xs={1.5}>
                        <PlusIcon onClick={handleAddUser} />
                    </Grid>
                </Grid>
                <Divider>selected User</Divider>
                <Stack direction="row" flexWrap="wrap">
                    {userNames.map((user, i) => {
                        return <Chip label={user} onDelete={(event) => handleDelete(event, i)} key={user} idx={i} />
                    })}
                </Stack>
                <button onClick={handleAddStudy}>시작</button>
            </Box>
        </div>
    )
}



export default StudyCreate;