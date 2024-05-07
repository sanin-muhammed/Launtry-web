import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SplashPage from "./pages/SplashPage/SplashPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" Component={LandingPage} />
                <Route exact path="/splash" Component={SplashPage} />
                <Route exact path="/authPage" Component={AuthPage} />
                <Route exact path="/login" Component={LoginPage} />
                <Route exact path="/register" Component={RegisterPage} />
            </Routes>
        </>
    );
};

export default App;
