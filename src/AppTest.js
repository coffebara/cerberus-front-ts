import axios from "axios";

const onNaverLogin = () => {

    window.location.href = "http://localhost:9000/oauth2/authorization/naver"
}

const onKakaoLogin = () => {

    window.location.href = "http://localhost:9000/oauth2/authorization/kakao"
}

const onGoogleLogin = () => {

    window.location.href = "http://localhost:9000/oauth2/authorization/google"
}

const getDate = () => {


    axios("http://localhost:9000/my", {
        method: "GET",
        withCredentials: true
    })
    .then((res) => {
        alert(res.data);
        console.log(res);
    })
    .catch((error) => alert(error))
}

function Apptest() {
    return (
        <>
            <button onClick={onNaverLogin}>NAVER LOGIN </button>
            <button onClick={onKakaoLogin}>KAKAO LOGIN </button>
            <button onClick={onGoogleLogin}>GOOGLE LOGIN </button>

            <button onClick={getDate}>Get Data</button>
        </>
    );
}

export default Apptest;