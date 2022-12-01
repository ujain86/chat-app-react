const { createSlice } = require('@reduxjs/toolkit');

const chatSlice = createSlice({
    name: 'chat',
    initialState: [],
    reducers: {
        add(state, action) {
            // state.push(action.payload);
            return {...state, [0]: action.payload}
            // return {[0]: action.payload};
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        addID(state, action) {
        //    return state[0].chatID(action.payload);
        //    return state.filter((item) => {
        //     item.chatID = action.payload;
        //    });
        
        return { ...state, [1]: action.payload } // correct
        // return { ...state, state[1].chatID: action.payload }
        // return { chatID: action.payload, ...state  }
        
        // state.push(action.payload);
        },
    },
});

export const { add, remove,addID } = chatSlice.actions;
export default chatSlice.reducer;