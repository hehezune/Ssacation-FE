// import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Divider from '@mui/material/Divider';
// import Stack from '@mui/material/Stack';
// import Chip from '@mui/material/Chip';
// import React from 'react';
// import PlusIcon from '@mui/icons-material/Add';
// import TextField from '@mui/material/TextField';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// const handleDelete = () => {
//     console.info('You clicked the Chip.');
// };

// function StudyCreate() {
//     const [studyName, setStudyName] = React.useState();
//     const [userNames, setUserName] = React.useState([]);
//     const userNameRef = React.useRef();

//     const handleAddStudy = (event, value) => {

//     }

//     const handleAddUser = (event) => {
//         const newUserNames = userNames.slice();
//         newUserNames.push(userNameRef.current.value)
//         console.log(userNames);
//         setUserName(newUserNames);
//     }

//     return (
//             <div>
//             <div>신규 스터디 생성</div>
//             <Box sx={{ flexGrow: 1 }}>
//                 <Grid container spacing={2}>
//                     <Grid item xs={3}>
//                         <Item>이름</Item>
//                     </Grid>
//                     <Grid item xs={9}>
//                         <TextField id="studyName" value={studyName} label="스터디 이름" varient="outlined"/>
//                     </Grid>
//                     <Grid item xs={3}>
//                         <Item>스터디원</Item>
//                     </Grid>
//                     <Grid item xs={7.5}>
//                         <TextField id="bojName" ref={userNameRef} label="등록할 유저" varient="outlined"/>
//                     </Grid>
//                     <Grid item xs={1.5}>
//                     <PlusIcon onClick={handleAddUser}/>
//                     </Grid>
//                 </Grid>
//                 <Divider>selected User</Divider>
//                 <Stack direction="row" flexWrap="wrap">
//                     <Chip label="beyondthecoder" onDelete={handleDelete}/>
//                     <Chip label="jvlover" onDelete={handleDelete}/>
//                     <Chip label="beom0109" onDelete={handleDelete}/>
//                     <Chip label="haanwhy" onDelete={handleDelete}/>
//                     <Chip label="haanwhy" onDelete={handleDelete}/>
//                     <Chip label="haanwhy" onDelete={handleDelete}/>
//                 </Stack>
//                 <button onClick={handleAddStudy}>시작</button>
//             </Box>
//             </div>
//     )
// }



// export default StudyCreate;