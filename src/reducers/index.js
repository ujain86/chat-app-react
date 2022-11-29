export default function chats  (state = {}, action) {
    if(action.type === 'ADD_CHAT_LOG'){
        return action.chat;
    }

    else{
        return state;
    }
}