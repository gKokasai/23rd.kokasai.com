import React, { useState, FC } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ForCumpus: FC = (): JSX.Element => {

    const [inputEmail, setInputEmail] = useState(""); 
    const handleEmailForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(event.target.value)
        setInputEmail(event.target.value);
    };

    const [inputPassWord, setInputPassWord] = useState("");
    const handlePassWordForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputPassWord(event.target.value);
    }


    const login = () => {
        const loginEndPointUrl: string = "/login"
        axios
            .post(loginEndPointUrl,
                 {
                auth: {
                    username: inputEmail,
                    password: inputPassWord
            }})
            .then((res)=>{
                console.log(res);
            })
            .catch((error)=>{
                console.log(error);
            })
        
    }
    return(
        <form onSubmit={() => console.log(inputEmail, inputPassWord)}>
            <input type="text" onChange={handleEmailForm}/>
            <input type="text" onChange={handlePassWordForm}/>
            <Link to="/ForCumpus">
                <button onClick={() => login()}>Login</button>
            </Link>
        </form>
    );
};
export default ForCumpus;