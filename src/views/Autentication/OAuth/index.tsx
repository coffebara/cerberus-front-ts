import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";

export default function OAuth() {

    const { token, expirationTime } = useParams();
    const [cookie, SetCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {

        if (!token || !expirationTime) return;

        const now = new Date().getTime() * 1000;
        const expires = new Date(now + expirationTime);

        SetCookie('accessToken', token, { expires, path: '/'});
        navigate('/');

    }, [token]);


    return <div></div>;
}
