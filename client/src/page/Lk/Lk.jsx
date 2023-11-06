import style from "./Lk.module.css"
import { Routes, Route, Link } from "react-router-dom"
import Home from "../home/Home"

function Lk() {
  return (
    <>
      <div id="lk" className={style.LkMain}>
        <div className={style.LkHeading}>
          <h1>Добро пожаловать</h1>

          <Link className={style.regBtn} to="/login">
            Регистрация
          </Link>

          <Link className={style.regBtn} to="/signIn">
            Авторизация
          </Link>

          <Link className={style.homeBtn} to="/">
            На главную
          </Link>
        </div>
        <div className={style.LkImg}>
          <img src="/src/assets/img1.svg" alt="" />
        </div>
      </div>
    </>
  )
}
export default Lk
