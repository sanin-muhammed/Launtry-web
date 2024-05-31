import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SplashPage from "./pages/SplashPage/SplashPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import OtpLogin from "./pages/OtpPage/OtpLogin";
import ForgotPassword from "./pages/PasswordPage/ForgotPassword";
import OtpVerification from "./pages/OtpPage/OtpVerification";
import NewPassword from "./pages/PasswordPage/NewPassword";
import PasswordChanged from "./pages/PasswordPage/PasswordChanged";
import Home from "./pages/Home/Home";
import Washing from "./pages/ServicePages/Washing";
const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" Component={LandingPage} />
                <Route path="/splash" Component={SplashPage} />
                <Route path="/authPage" Component={AuthPage} />
                <Route path="/login" Component={LoginPage} />
                <Route path="/register" Component={RegisterPage} />
                <Route path="/login_otp" Component={OtpLogin} />
                <Route path="/verify_otp" Component={OtpVerification} />
                <Route path="/forgot_password" Component={ForgotPassword} />
                <Route path="/new_password" Component={NewPassword} />
                <Route path="/password_changed" Component={PasswordChanged} />

                <Route exact path="/home" Component={Home} />
                <Route exact path="/washing" Component={Washing} />

            </Routes>
        </>
    );
};

export default App;
