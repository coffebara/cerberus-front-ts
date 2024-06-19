import InputBox from "../../../components/inputBox/Index";
import { ChangeEvent, useRef, useState, KeyboardEvent } from "react";
import "./style.css";

export default function SignUp() {

    const idRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const passwordCheckRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const certificationNumberRef = useRef<HTMLInputElement | null>(null);

    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordCheck, setPasswordCheck] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [certificationNumber, setCertificationNumber] = useState<string>('');

    const [isIdError, setIdError] = useState<boolean>(false);
    const [isPasswordError, setPasswordError] = useState<boolean>(false);
    const [isPasswordCheckError, setPasswordCheckError] = useState<boolean>(false);
    const [isEmailError, setEmailError] = useState<boolean>(false);
    const [isCertificationNumberError, setCertificationNumberError] = useState<boolean>(false);

    const [idMessage, setIdMessage] = useState<string>('');
    const [passwordMessage, setPasswordMessage] = useState<string>('');
    const [passwordCheckMessage, setPasswordCheckMessage] = useState<string>('');
    const [emailMessage, setEmailMessage] = useState<string>('');
    const [certificationNumberMessage, setCertificationNumberMessage] = useState<string>('');

    const signUpButtonClass = id && password && passwordCheck && email && certificationNumber ?
    'primary-button-lg' : 'disable-button-lg';

    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setId(value);
        setIdMessage('');
    };

    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);
        setPasswordMessage('');
    };

    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPasswordCheck(value);
        setPasswordCheckMessage('');
    };

    const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
        setEmailMessage('');
    };

    const onCertificationNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCertificationNumber(value);
        setCertificationNumberMessage('');
    };

    const OnIdButtonClickHandler = () => {

    };

    const OnEmailButtonClickHandler = () => {

    };

    const OnCertificationNumberButtonClickHandler = () => {

    };

    const OnSnsKakaoClickHandler = () => {
        window.location.href = "http://localhost:9000/oauth2/authorization/kakao"
    }
    const OnSnsNaverClickHandler = () => {
        window.location.href = "http://localhost:9000/oauth2/authorization/naver"
    }
    const OnSnsGoogleClickHandler = () => {
        window.location.href = "http://localhost:9000/oauth2/authorization/googke"
    }

    

    const onIdKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return; // Enter 키가 아니면 종료
        OnIdButtonClickHandler();
    }
    const onPasswordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!passwordCheckRef.current) return;
        passwordCheckRef.current.focus(); // Enter를 입력하면 passwordCheck(다음 창)로 이동
    }
    const onPasswordCheckKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!emailRef.current) return;
        emailRef.current.focus();
    }
    const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        OnEmailButtonClickHandler(); // 이메일 인증이 동작
    }
    const onCertificationNumberKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        OnCertificationNumberButtonClickHandler();
    }


    return (
        <div id="sign-up-wrapper">
            <div className="sign-up-image"></div>
            <div className="sign-up-container">
                <div className="sign-up-box">
                    <div className="sign-up-title">{"오늘 산책 완료 !"}</div>
                    <div className="sign-up-content-box">
                        <div className="sign-up-content-sns-sign-in-box">
                            <div className="sign-up-content-sns-sign-in-title">{'SNS 로그인'}</div>
                            <div className="sign-up-content-sns-sign-in-button-box">
                                <div className="kakao-sign-in-button" onClick={OnSnsKakaoClickHandler}></div>
                                <div className="naver-sign-in-button" onClick={OnSnsNaverClickHandler}></div>
                                <div className="google-sign-in-button" onClick={OnSnsGoogleClickHandler}></div>
                            </div>
                        </div>
                        <div className="sign-up-content-divider"></div>
                        <div className="sign-up-content-input-box">
                            <InputBox ref={idRef} title="아이디" placeholder="아이디를 입력해주세요" type="text" value={id} onChange={onIdChangeHandler} isErrorMessage={isIdError} message={idMessage} buttonTitle="중복 확인" onButtonClick={OnIdButtonClickHandler} onKeyDown={onIdKeyDownHandler}/>
                            <InputBox ref={passwordRef} title="비밀번호" placeholder="비밀번호를 입력해주세요" type="password" value={password} onChange={onPasswordChangeHandler} isErrorMessage={isPasswordError} message={passwordMessage} onKeyDown={onPasswordKeyDownHandler}/>
                            <InputBox ref={passwordCheckRef} title="비밀번호 확인" placeholder="비밀번호를 입력해주세요" type="password" value={passwordCheck} onChange={onPasswordCheckChangeHandler} isErrorMessage={isPasswordCheckError} message={passwordCheckMessage} onKeyDown={onPasswordCheckKeyDownHandler}/>
                            <InputBox ref={emailRef} title="이메일" placeholder="이메일 주소를 입력해주세요" type="text" value={email} onChange={onEmailChangeHandler} isErrorMessage={isEmailError} message={emailMessage} buttonTitle="이메일 인증" onButtonClick={OnEmailButtonClickHandler} onKeyDown={onEmailKeyDownHandler}/>
                            <InputBox ref={certificationNumberRef} title="인증번호" placeholder="인증번호 4자리를 입력해주세요" type="text" value={certificationNumber} onChange={onCertificationNumberChangeHandler} isErrorMessage={isCertificationNumberError} message={certificationNumberMessage} buttonTitle="인증 확인" onButtonClick={OnCertificationNumberButtonClickHandler} onKeyDown={onCertificationNumberKeyDownHandler}/>
                        </div>
                        <div className="sign-up-content-button-box">
                            <div className={`${signUpButtonClass} full-width`}>{"회원가입"}</div>
                            <div className="text-link-lg full-width">{"로그인"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
