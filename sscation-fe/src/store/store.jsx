import { configureStore, createSlice } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
// import { enableMapSet } from 'immer';
// enableMapSet();
// const accountSlice = createSlice({
//     name: 'account',
//     initialState: "",
//     reducers: {

//     }
// })

const userSlice = createSlice({
    name: 'userStatus',
    initialState: {
        loginUser: 'beyondThecoder',
        currentGroup: '개인 학습',
        studyGroups: {
            '개인 학습': 'beyondthecoder'
        }
    },
    reducers: {
        selectGroup(state, action) {
            // console.log(action, action.groupName)
            state.currentGroup = action.payload;

            // 눌렀을 때 selector를 통해서 null인지 확인
            // null이면 요청 보내서 불러옴
            // 불러온거를 reducer를 통해 등록
            console.log(state.currentGroup)
            // console.log(state.currentGroup, state.groupList);
        },
        fetchGroup(state, action) {
            state.currentGroup = action.payload.currentGroup;
            state.studyGroups = {...state.studyGroups};
            state.studyGroups[state.currentGroup] = action.payload.studyGroup;
            
            console.log(state.studyGroups);
        },
        createGroup(state, action) {
            state.studyGroups = {...state.studyGroups,
                                ...action.payload}
            state.currentGroup = Object.keys(action.payload)
            console.log(state.studyGroups, state.currentGroup);
        },
        loginInit(state, action) {
            // 로그인할때 모든 스터디그룹 목록을 studygroups 객체 소것ㅇ에 부여한다.
            state.studyGroups = {...state.studyGroups};
            action.payload.groups.forEach(element => {
                state.studyGroups[element] = null;
            });
            console.log(state.studyGroups);
            // state.studyGroups = 
        }
    }
})

const store = configureStore({

    // reducer: {account: accountSlice.reducer, studyGroup: userSlice.reducer}
    reducer: {group : userSlice.reducer }
},
    devToolsEnhancer()
)

export default store;
export const userActions = userSlice.actions;