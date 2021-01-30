import React, { useState, FC } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Base64 } from "js-base64";

const ForCumpus: FC = (): JSX.Element => {
    const apiUrl: string = "https://api.kokasai.com"

    const [inputEmail, setInputEmail] = useState(""); 
    const handleEmailForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputEmail(event.target.value);
    };

    const [inputPassWord, setInputPassWord] = useState("");
    const handlePassWordForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputPassWord(event.target.value);
    }

    const encodeToBase64: any = (email: any, passWord: any) => {
        return (Base64.encode(email) + ":" + Base64.encode(passWord));
    }

    const createHeader: any = () => {
        const emailAndPassword: string = encodeToBase64(inputEmail, inputPassWord);
        const headers = {
            "Authorization": `Basic ${emailAndPassword}`
        }
        return headers;
    }

    const login = () => {
        const loginEndPointUrl: string = apiUrl + "/login"
        const header = createHeader();
        axios
            .get(loginEndPointUrl, {
                headers: header
            })
            .then((res)=>{
                console.log(res);
            })
        
    }
    return(
        <form onSubmit={() => console.log(inputEmail, inputPassWord)}>
            <input type="text" onChange={() => handleEmailForm}/>
            <input type="text" onChange={() => handlePassWordForm}/>
            <Link to="/ForCumpus">
                <button onClick={() => login}>Login</button>
            </Link>
        </form>
    );
};
export default ForCumpus;