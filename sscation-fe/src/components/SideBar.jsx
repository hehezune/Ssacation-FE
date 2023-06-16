import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function SideBar() {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton>

                <ListItemText primary="개인 학습" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>

                <ListItemText primary="그룹 추가 +" />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default SideBar;