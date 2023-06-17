import { styled } from '@mui/material/styles';
import React from 'react';
import PlusIcon from '@mui/icons-material/Add';
import { Box, Paper, Grid, Divider, Stack, Chip, TextField} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function StudyCreate() {
    const [studyName, setStudyName] = React.useState();
    const [userNames, setUserName] = React.useState([]);
    const userNameRef = React.useRef();

    const handleDelete = (event, idx) => {
        const newUserNames = userNames.slice();
        // console.log(event)
        newUserNames.splice(idx, 1);
        setUserName(newUserNames);
    }
    
    const handleAddStudy = (event, value) => {
        studyName;
        userNames;
    }

    const handleAddUser = (event) => {
        const newUserNames = userNames.slice();
        const user = userNameRef.current.getElementsByTagName('input')[0].value;
        newUserNames.push(user);
        setUserName(newUserNames);
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
                        <TextField id="studyName" value={studyName} label="스터디 이름" varient="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <Item>스터디원</Item>
                    </Grid>
                    <Grid item xs={7.5}>
                        <TextField id="bojName" ref={userNameRef} label="등록할 유저" varient="outlined" />
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