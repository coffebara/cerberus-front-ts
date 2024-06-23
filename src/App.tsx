import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./views/Autentication/SignUp";
import Apptest from "./AppTest";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Apptest />}>
            </Route>
            <Route path="/auth">
                <Route path="sign-up" element={<SignUp />} />
            </Route>
        </Routes>
    );
}

export default App;
