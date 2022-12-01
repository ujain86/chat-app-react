import React from 'react';
import { useSelector } from 'react-redux';

function AddConversation() {

    const items = useSelector((state) => state.chat);
    console.log(items[0].allFriends[0]);

    return (
        <div>
            {items[0].allFriends.map((item) => {
                return (
                    <div>{item.name}</div>
                )
            })}

        </div>
    )
    }

export default AddConversation;