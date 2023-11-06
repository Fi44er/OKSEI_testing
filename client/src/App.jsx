import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Lk from "./page/Lk/Lk";
import Home from "./page/home/Home";
import SignIn from "./page/signIn/SignIn";
import Login from "./page/login/Login";
import Account from "./page/account/account";

function App() {
  return (
    <>
      <header>
        <div className="headerLogo">
          <img src="/src/assets/logo.svg" alt="logo" />
          <h1>Тестирование</h1>
        </div>
        <div className="headerMenu">
          <nav className="headerNav">
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="#">О нас</Link>
              </li>
              <li>
                <Link to="#">Помощь</Link>
              </li>
              <li>
                <Link to="#">Оренбург</Link>
              </li>
            </ul>
          </nav>
          <div>
            <p>+7 (3532) 31-72-39</p>
          </div>
          <div className="profile">
            <Link to="/lk">Личный кабинет</Link>
            <img src="/src/assets/profile.svg" alt="profile" />
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/lk" element={<Lk />} />
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
