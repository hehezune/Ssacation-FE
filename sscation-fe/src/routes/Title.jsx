import titleText from '../assets/titleText.png';
import titleImg from '../assets/titleImg.png';
import kakaoButton from '../assets/kakaoButton.png';
import { Link } from 'react-router-dom';
// import './Title.css'
import styled from "styled-components";

function Test() {
    return (
        <p>is it wright?</p>
    )
}

const BlackBtn = styled(Test)`
    background-color: #f0f0f0;
`;
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
            <BlackBtn/>
        </>
    )
}



export default Title;