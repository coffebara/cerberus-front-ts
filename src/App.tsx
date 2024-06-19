import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./views/Autentication/SignUp";
import InputBox from "./components/inputBox/Index";
import { ChangeEvent, useState } from "react";

function App() {

    const [id, setId] = useState<string>('');

    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setId(value);
    }

    const onIdButtonClickHandler = () => {

    }

    return (
        <Routes>
            <Route path="/auth">
                <Route path="sign-up" element={<SignUp />} />
                <Route path="sign-up-test" element={<InputBox title="아이디" placeholder="아이디를 입력해주세요" type="text" value={id} onChange={onIdChangeHandler} buttonTitle="중복 확인" onButtonClick={onIdButtonClickHandler} message="사용 가능한 아이디입니다." isErrorMessage={true}/>}/>
                <Route path="sign-up-button" element=<div className="text-link-lg  full-width">회원가입</div> />
            </Route>
        </Routes>
    );
}

export default App;
