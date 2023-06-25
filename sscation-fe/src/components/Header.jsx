import kakaoButton from '../assets/kakaoButtonMini.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

const REST_API_KEY = import.meta.env.VITE_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

function Header() {
    const handlerLoginBtn = () => {
        console.log(REDIRECT_URI)
        // 카카오 인가코드 요청

        // 요청 받아서 백에 요청

        // 디스패치

        // 이렇게 하거나

        // 디스패치 할떄 바로 요청 넣거나
    }


    return (
        <header>
            <Link to="/main"><img src={logo}></img></Link>
            <span>
            <img src={kakaoButton} onClick={handlerLoginBtn}/>
                <a href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`}>
                <img src={kakaoButton} onClick={handlerLoginBtn}/>
                </a>
            </span>
        </header>
    )
}



export default Header;

        // const newUserName = userNames.slice();
        // const user = userNameRef.current.getElementsByTagName('input')[0].value;
        // console.log(userNameRef.current.getElementsByTagName('input')[0].value);
        // userNames.push(user);
        // console.log("데이터", userNames)
        // setUserName(userNames);