import kakaoButton from '../assets/kakaoButtonMini.png';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
    return (
        <header>
            <img src={logo}></img>
            <span>
                <img src={kakaoButton} />
            </span>
        </header>
    )
}



export default Header;