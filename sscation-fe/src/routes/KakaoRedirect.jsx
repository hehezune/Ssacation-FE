import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/store";
import axios from 'axios';

const API_PATH = import.meta.env.VITE_API_PATH_USER_INFO;

function KakaoRedirect() {
    const dispatch = useDispatch();

    useEffect(async () => {
        const permissionCode = window.location.href.split('=')[1];
        console.log(permissionCode)
        let result ={}; 
        await axios({
            url: API_PATH,
            method: 'get'
        }).then((res) => result = res.data)
        .catch((err) => console.log(err));

        console.log(result);
        dispatch(userActions.loginInit(result));

        useNavigate('/main')
    }, []);

    return (
        <div>
            로딩중입니다.
        </div>
    )
}

export default KakaoRedirect;