import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		RoomId: null,
	},
	reducers: {
		enterRoom: (state, action) => {
			state.RoomId = action.payload.RoomId;
		},
		// default: (state) => {
		// 	state.RoomId = 'ArrYSCyVIyqtr6spFA5k';
		// },
	},
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.appReducer.RoomId;

export default appSlice.reducer;
