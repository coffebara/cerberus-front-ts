import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./views/Autentication/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Routes>
            <Route path="/auth">
                <Route path="sign-up" element={<SignUp />} />
            </Route>
        </Routes>
    );
}

export default App;
