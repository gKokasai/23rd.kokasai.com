import React, { useState, FC } from "react";


const ForCumpus: FC = () => {
    const [inputEmail, setInputEmail] = useState({}); 
    const handleEmailForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputEmail(event.target.value);
    };
    const [inputPassWord, setInputPassWord] = useState({});
    const handlePassWordForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputPassWord(event.target.value);
    }
    return(
        <form onSubmit={() => console.log(inputEmail, inputPassWord)}>
            <input type="text" onChange={() => handleEmailForm}/>
            <input type="text" onChange={() => handlePassWordForm}/>
        </form>
    );
};
export default ForCumpus;