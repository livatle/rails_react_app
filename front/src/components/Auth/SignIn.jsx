import React, { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
//api
import { signIn } from '../../lib/api/auth';
// context
import { AuthContext } from '../../App';
// component
import { SignForm } from '../TextField'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessageOpen, setAlertMessageOpen] = useState(false)
    const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    //ログインを実行する関数
    const signInHandleSubmit = async (e) => {
      e.preventDefault();

        const params = {
          email: email,
          password: password,
        }
        
        try {
          //apiへリクエスト
          const res = await signIn(params);
          //成功した場合はCookieに各値を格納
          if (res.status === 200) {
            Cookies.set('_access_token', res.headers['access-token']);
            Cookies.set('_client', res.headers['client']);
            Cookies.set('_uid', res.headers['uid']);
    
            setIsSignedIn(true);
            //ログインに成功したユーザーの情報をセット
            setCurrentUser(res.data.data);
            
            navigate('/');
            window.location.reload()
          } else {
            //ログインに失敗した場合、アラートメッセージを表示
            setAlertMessageOpen(true)
          }
        } catch (e) {
          console.log(e);
          setAlertMessageOpen(true)
        }
      };

    return (
        <SignForm 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            alertMessageOpen={alertMessageOpen}
            setAlertMessageOpen={setAlertMessageOpen}
            handleSubmit={signInHandleSubmit}
            signType='signIn'
        />
    )
}

export default SignIn