import axios from "axios";
import { useState } from "react";

const DOMAIN = 'http://localhost:9000';

// SNS 소셜 로그인
const onNaverLogin = () => {
    window.location.href = `${DOMAIN}/oauth2/authorization/naver`;
};

const onKakaoLogin = () => {
    window.location.href = `${DOMAIN}/oauth2/authorization/kakao`
};

const onGoogleLogin = () => {
    window.location.href = `${DOMAIN}/oauth2/authorization/google`
};

const getDateForUser = () => {
    axios("http://localhost:9000/my", {
        method: "GET",
        withCredentials: true,
    })
        .then((res) => {
            alert(res.data);
            console.log(res);
        })
        .catch((error) => alert(error));
};

const getDateForAdmin = () => {
    axios("http://localhost:9000/admin", {
        method: "GET",
        withCredentials: true,
    })
        .then((res) => {
            alert(res.data);
            console.log(res);
        })
        .catch((error) => alert(error));
};

function Apptest() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // 회원가입 로직 수행
        console.log("username:", username);
        console.log("password:", password);
        // 서버로 데이터 전송 등의 추가 작업 수행

        axios({
            method: "post",
            url: "http://localhost:9000/join",
            data: {
                username: username,
                password: password,
            },
            withCredentials: true,
        })
            .then((res) => {
                alert("success");
                console.log(res);
            })
            .catch((error) => alert(error));
    };

    const onLoginClickHandler = () => {
        console.log(username);

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        axios({
            method: "post",
            url: "http://localhost:9000/login",
            data: formData,
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                alert("login success");
                console.log(res.data);

                let accessToken = res.headers.get("Access");
                localStorage.setItem("access", accessToken);
                console.log(accessToken);
            })
            .catch((error) => alert(error));
    };

    const onRefreshTokenClickHandler = () => {
        axios({
            method: "post",
            url: "http://localhost:9000/reissue",
            withCredentials: true,
        })
            .then((res) => {
                alert("refreshToken success");
                console.log(res);

                let accessToken = res.headers.get("Access");
                localStorage.setItem("access", accessToken);
            })
            .catch((error) => alert(error));
    };

    const onMainPageClickHandler = () => {
        axios({
            method: "get",
            url: "http://localhost:9000/",
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                access: localStorage.getItem("access"),
            },
        })
            .then((res) => {
                alert("main success");
                console.log(res.data);
            })
            .catch((error) => alert(error));
    };

    const onAdminPageClickHandler = () => {
        axios({
            method: "get",
            url: "http://localhost:9000/admin",
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                access: localStorage.getItem("access"),
            },
            
        })
            .then((res) => {
                alert("Admin success");
                console.log(res);
            })
            .catch((error) => alert(error));
    };

    const onLogoutClickHandler = () => {
        axios({
            method: "get",
            url: "http://localhost:9000/logout",
            withCredentials: true,
        })
            .then((res) => {
                alert("logout success");
                console.log(res);
                localStorage.removeItem("access");
            })
            .catch((error) => alert(error));
    };

    return (
        <>
            <button onClick={onNaverLogin}>NAVER LOGIN </button>
            <button onClick={onKakaoLogin}>KAKAO LOGIN </button>
            <button onClick={onGoogleLogin}>GOOGLE LOGIN </button>

            <button onClick={getDateForUser}>Get Data for USER</button>
            <button onClick={getDateForAdmin}>Get Data for ADMIN</button>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>

            <button onClick={onLoginClickHandler}>로그인</button>
            <button onClick={onRefreshTokenClickHandler}>리프레쉬 토큰</button>
            <button onClick={onMainPageClickHandler}>메인 페이지로</button>
            <button onClick={onAdminPageClickHandler}>관리자 페이지로</button>
            <button onClick={onLogoutClickHandler}>로그아웃</button>
        </>
    );
}

export default Apptest;
