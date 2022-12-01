const { createSlice } = require('@reduxjs/toolkit');

const chatSlice = createSlice({
    name: 'chat',
    initialState: {},
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
        addChatLog(state, action) {
            // return { ...state, [2]: action.payload}
            // return {
            //     ...state,
            //     [0].friends.map((item) => {
            //         if(item.id == 2){
            //             item.chatlog.push(action.payload);
            //         }
            //     } )
            // }
            let newState = {...state};

            let tempID = state[1].chatID; 
            console.log('tempid',tempID);
            let newFriends = newState[0].friends;
            console.log(newFriends);
            
            newState[0].friends.forEach((item) => {
                if(item.id == tempID){
                    item.chatlog.push(action.payload);
                }
            });
            // ((item)=>{
            //     if(item.id == tempID){
            //         item.chatlog.push(action.payload);
            //     }
            //     return item;
            // });

            
            return newState;
            // let tempA = {... state[0],friends:newFriends};
            // console.log('tempA:',tempA);
            // console.log(typeof(state));
            // return {... state,0:tempA};
        },
    },
});

export const { add, remove,addID, addChatLog } = chatSlice.actions;
export default chatSlice.reducer;