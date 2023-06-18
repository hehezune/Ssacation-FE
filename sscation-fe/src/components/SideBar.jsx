import { List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import { Link } from 'react-router-dom';

// 리덕스를 통해 스터디그룹 리스트를 중앙에서 관리해야 한다.
function SideBar() {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton>

                <Link to="/main"><ListItemText primary="개인 학습" /></Link>
                </ListItemButton>
            </ListItem>
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