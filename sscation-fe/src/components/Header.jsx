import kakaoButton from '../assets/kakaoButtonMini.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <Link to="/main"><img src={logo}></img></Link>
            <span>
                <img src={kakaoButton} />
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