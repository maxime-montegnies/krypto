import { useEffect, useState } from "react";
import useApp from "./store/useApp";
import styles from "./style/style.module.scss";
import { NavLink } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export default function Login(props) {
  console.log("RENDER Login");
  const { t } = useTranslation();
  const [enable, setEnable] = useState(false);
  const [forgetPass, setForgetPass] = useState(false);
  const setLogin = useApp((state) => state.setLogin);
  const setUpdateIntersectionObserver = useApp(
    (state) => state.setUpdateIntersectionObserver
  );
  useEffect(() => {
    const _Login = useApp.subscribe(
      (state) => state.login,
      (value) => {
        setEnable(value);
      }
    );
    return () => {
      _Login();
    };
  }, []);
  useEffect(setUpdateIntersectionObserver, [enable]);
  useEffect(()=>{
    setForgetPass(false)
  }, [enable]);

  if (!enable) {
    return <></>;
  }
  return (
    <div className={styles.login}>
      <div className={styles.login_bg +" fade-in"} onClick={() => setLogin(false)}></div>
      <div className={styles.login_frame + " slide-in"}>
        <div className={styles.login_frame_content}>
          <h1>{t('login.title')}</h1>
          <p>{t('login.subtitle')}</p>
          {forgetPass ? (
            <form>
            <input type="text" name="email" id="" placeholder={t('login.email')} />
            <input type="password" name="password" id="" placeholder={t('login.pass')} />
            <div>
            <button>{t('login.forgetPass')}</button>
            <p onClick={() => setForgetPass(false)}>{t('login.connect')}</p>
            </div>
        </form>
          ) : (
            <form>
                <input type="text" name="email" id="" placeholder={t('login.email')} />
                <input type="password" name="password" id="" placeholder={t('login.pass')} />
                <div>
                <button>{t('login.connect')}</button>
                <p onClick={() => setForgetPass(true)}>{t('login.forgetPass')}</p>
                </div>
            </form>
          )
          }
          
        </div>
        <div className={styles.login_frame_footer}>
          <p>{t('login.noAccount')}</p>
          <NavLink to="/create_account" onClick={() => setLogin(false)}>{t('login.createAccount')}</NavLink>
          <NavLink to="/">
            <div className={styles.navigation_logo} onClick={() => setLogin(false)}></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
