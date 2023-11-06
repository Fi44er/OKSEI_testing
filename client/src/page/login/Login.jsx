import style from "./Login.module.css"
function Login() {
  return (
    <div className={style.signInMain}>
      <form>
        <div>
          <h2>Регистрация</h2>
        </div>

        <div className={style.signInInside}>
          <input type="text" placeholder="Фио" />
          <input type="text" placeholder="Телефон:" />
          <input type="text" placeholder="Пол" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Пороль" />
          <input type="text" placeholder="Повторите пороль" />
          <button>Зарегистрироваться</button>
        </div>
      </form>
    </div>
  )
}
export default Login
