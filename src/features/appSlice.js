import {createSlice} from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        roomId: null,
    },
    reducers: {
        enterRoom: (state, action) => {
            state.roomId = action.payload.roomId;
        },
        // default: (state) => {
        // 	state.roomId = 'ArrYSCyVIyqtr6spFA5k';
        // },
    },
});

export const {enterRoom} = appSlice.actions;

export const selectRoomId = (state) => state.appReducer.roomId;

export default appSlice.reducer;
