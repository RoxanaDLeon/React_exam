import React from 'react';

const uploadUser = props => {
    const uploadUserHandler=(event)=>{
        event.preventDefault();
    };

    return(
        <form onSubmit={uploadUserHandler}>
            <label htmlFor="itemname">Itemname</label>
            <input id="itemname" type="text" />
            <label htmlFor="itemId">itemId</label>
            <input id="itemId" type="text" />
            <label htmlFor="description">itemId</label>
            <input id="description" type="text" />
        </form>
    );
};

export default uploadUser;