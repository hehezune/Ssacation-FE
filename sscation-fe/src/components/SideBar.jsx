import { List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import { Link } from 'react-router-dom';
import {userActions} from '../store/store.jsx';
import { useDispatch, useSelector } from 'react-redux';
// 리덕스를 통해 스터디그룹 리스트를 중앙에서 관리해야 한다.

const API_PATH = import.meta.env.VITE_API_PATH_GET_STURY_GROUP;

const fecthStudyGroup = (name) => {
    // 결국 함수를 반환하는 함수를 만들었네
    return async (dispatch) => {

        const studyGroup = {currentGroup: name,
        studyGroup: []};
        axios({
            url: API_PATH,
            method: 'get',
            params: name,
        }).then((res) => {
            studyGroup['studyGroup'] = res.data;
            dispatch(userActions.fetchGroup(studyGroup));
        })
        .catch((err) => console.log(err));
        

    }
}

function SideBar() {
    // useSelector로 그룹 리스트 받아오기

    // /////////////////////////
    // axios 요청 : 스터디 그룹 눌렀을 때 그에 대한 정보 받아오기
    // 기존 store에 키 : 밸류로 스터디명 : 스터디원 배열 했던거를
    // 그냥 단순히 스터디명 이름의 배열로 바꿔야 함.

    const dispatch = useDispatch();
    const studyGroups = useSelector(state => state.group.studyGroups);
    const handlerSelectStudy = (event, groupName) => {
        console.log(groupName)
        if (studyGroups[groupName] == null) {
            dispatch(fecthStudyGroup(groupName));
        } else {
            dispatch(userActions.selectGroup(groupName));
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