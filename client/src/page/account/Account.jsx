import style from "./Account.module.css";
import { Routes, Route, Link } from "react-router-dom";
function Account() {
  return (
    <div className={style.AccountBlock}>
      <div className={style.AccountInside}>
        <div className={style.AccountHeader}>
          <nav className={style.headerNav}>
            <ul>
              <li>
                <Link>Мой профиль</Link>
              </li>
              <li>
                <Link>Тесты</Link>
              </li>
              <li>
                <Link>Пройденые Тесты</Link>
              </li>
              <li>
                <Link>Заявки</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.Profile}>
          <form className={style.imgForm}>
            <div className={style.ProfileHeading}>
              <h3>Мой профиль</h3>
            </div>
            <div className={style.ProfileImg}>
              <img src="/src/assets/Profile-11895093 (1).png" alt="" />
              <label for="file-input">Выберите файл</label>
            </div>
            <div className={style.ProfileInfo}>
              <div>
                <h4>ФИО:</h4>
                <div className={style.info}>
                  <p>Каримулин Валей Сергеевич</p>
                </div>
              </div>
              <div>
                <h4>Пол:</h4>
                <div className={style.info}>
                  <p>dkjhdhfgk</p>
                </div>
              </div>
              <div>
                <h4>Телефон:</h4>
                <div className={style.info}>
                  <p>+79228441233</p>
                </div>
              </div>
              <div>
                <h4>Почта:</h4>
                <div className={style.info}>
                  <p>djhgksjhkd@gmail.com</p>
                </div>
              </div>
              <div>
                <button>Редактировать</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Account;
