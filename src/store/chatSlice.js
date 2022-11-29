const { createSlice } = require('@reduxjs/toolkit');

const chatSlice = createSlice({
    name: 'chat',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = chatSlice.actions;
export default chatSlice.reducer;