import axios from 'axios';
import { Base64 } from 'js-base64';

class Api {
  URL: string;

  email: string;

  passWord: string;

  constructor(email: string, passWord: string) {
    this.URL = 'https://api.kokasai.com';
    this.email = email;
    this.passWord = passWord;
  }

  login() {
    const encodeToBase64 = (email: string, passWord: string): string => Base64.encode(`${email}:${passWord}`);
    const createHeader = (): { [key: string]: string } => {
      const emailAndPassword: string = encodeToBase64(this.email, this.passWord);
      const headers: {
          [key: string]: string;
        } = {
          Authorization: `Basic ${emailAndPassword}`,
        };
      return headers;
    };
    const loginEndPointUrl = `${this.URL}/login`;
    const header = createHeader();
    axios
      .post(loginEndPointUrl, null, {
        headers: header,
      })
      .then(() => true)
      .catch(() => false);
  }
}

export default Api;
