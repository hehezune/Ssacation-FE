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

const studyGroupSlice = createSlice({
    name: 'studyGroup',
    initialState: {
        currentGroup: 'solo',
        studyGroups: {
            solo: 'beyondthecoder'
        }
    },
    reducers: {
        selectGroup(state, action) {
            // console.log(action, action.groupName)
            state.currentGroup = state.studyGroups[action.payload];
            console.log(state.currentGroup)
            // console.log(state.currentGroup, state.groupList);
        },
        createGroup(state, action) {
            state.studyGroups = {...state.studyGroups,
                                ...action.payload}
            state.currentGroup = Object.keys(action.payload)
            console.log(state.studyGroups, state.currentGroup);
        }
    }
})

const store = configureStore({

    // reducer: {account: accountSlice.reducer, studyGroup: studyGroupSlice.reducer}
    reducer: studyGroupSlice.reducer
},
    devToolsEnhancer()
)

export default store;
export const studyGroupActions = studyGroupSlice.actions;