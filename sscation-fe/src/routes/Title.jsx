import titleText from '../assets/titleText.png';
import titleImg from '../assets/titleImg.png';
import kakaoButton from '../assets/kakaoButton.png';
import { Link } from 'react-router-dom';
import './Title.css'
function Title() {
    return (
        <>
            <div>
                <img className="title-text" src={titleText}></img>
                <img className="title-img" src={titleImg}></img>
            </div>
            <div className="buttons">
                <Link to="/main"><button>체험하기</button></Link>
                <img src={kakaoButton}></img>
            </div>
        </>
    )
}



export default Title;