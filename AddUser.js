import React from 'react';

const AddUser = props => {
    const[enteredAge,setEnteredAge]=useState('');
    const[enteredname,setEnteredName]=useState('');

    const addUserHandler=(event)=>{
        event.preventDefault();
    };

    const ageChangeChandler=(event)=>{
        setEnteredAge=(event.target.value);
    };

    const usernameChangeChandler=(event)=>{
        setEnteredName=(event.target.value);
    };

    return(
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredname} onChange={usernameChangeChandler}/>
            <label htmlFor="userId">UserId</label>
            <input id="userId" type="text" />
            <label htmlFor="age">UserAge (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeChandler} />
        </form>
    );
};

export default AddUser;