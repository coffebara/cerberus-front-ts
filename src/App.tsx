import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./views/Autentication/SignUp";
import SignIn from "./views/Autentication/SignIn";
import Apptest from "./AppTest";
import OAuth from "./views/Autentication/OAuth";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Apptest />}>
            </Route>
            <Route path="/auth">
                <Route path="sign-up" element={<SignUp />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path='oauth-response/:token/:expirationTime' element={<OAuth />} />
            </Route>
        </Routes>
    );
}

export default App;
