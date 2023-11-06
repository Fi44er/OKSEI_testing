import style from "./SignIn.module.css"
import { Routes, Route, Link } from "react-router-dom"

function SignIn() {
  return (
    <div className={style.signInMain}>
      <form>
        <div>
          <h2>Авторизация</h2>
        </div>

        <div className={style.signInInside}>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <Link to="/account">Войти</Link>
        </div>
      </form>
    </div>
  )
}
export default SignIn
