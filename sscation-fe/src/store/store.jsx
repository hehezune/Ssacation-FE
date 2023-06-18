import { configureStore, createSlice } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
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
        groupList: new Map([['solo', 'beyondthecoder']]),
    },
    reducers: {
        selectGroup(state, action) {
            state.currentGroup = state.groupList.get(action.groupName);
            alert(state)
            console.log(state);
        },
        createGroup(state, action) {
            state.groupList.set([action.groupName, action.groupList]);
            console.log(state);
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