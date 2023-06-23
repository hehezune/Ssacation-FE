import { List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import { Link } from 'react-router-dom';
import {studyGroupActions} from '../store/store.jsx';
import { useDispatch, useSelector } from 'react-redux';
// 리덕스를 통해 스터디그룹 리스트를 중앙에서 관리해야 한다.
function SideBar() {
    // useSelector로 그룹 리스트 받아오기
    const dispatch = useDispatch();
    const studyGroups = useSelector(state => state.group.studyGroups);
    const handlerSelectStudy = (event, groupName) => {
        console.log(groupName)
        dispatch(studyGroupActions.selectGroup(groupName));
    }
    const studyGrouptComponents = function() {
        let components = [];
        for (group of studyGroups) {
            components.push(
                <ListItem disablePadding>
                    <ListItemButton onClick={(e) => handlerSelectStudy(e, '개인 학습')}>

                        <Link to="/main" ><ListItemText primary="개인 학습" /></Link>
                    </ListItemButton>
                </ListItem>
            )
        }
    }

    return (
        <List>
            { Object.keys(studyGroups).map((name) => {
                return (
                    <ListItem disablePadding key={name}>
                        <ListItemButton onClick={(e) => handlerSelectStudy(e, name)} >
                            <Link to="/main" ><ListItemText primary={name} /></Link>
                        </ListItemButton>
                    </ListItem>
                )
            })}

            {/* 여기서 스터디그룹들 반복문으로 넣기 */}
            <ListItem disablePadding>
                <ListItemButton>

                <Link to="/main/create-study"><ListItemText primary="그룹 추가 +" /></Link>
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default SideBar;