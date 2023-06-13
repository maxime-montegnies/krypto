import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../components/SectionTemplates";
import { NavLink } from "react-router-dom";
import useApp from "../store/useApp";

export default function AccountCreate(props) {
  const { t } = useTranslation();
  const setLogin = useApp( (state) => state.setLogin);
  return (
      <div className={styles.create_account}>
      <div className={styles.create_account_content + " slide-in"}>
        <div className={styles.create_account_title}>
            <h2>{t("createAccount.subtitle")}</h2>
            <h1>{t("createAccount.title")}</h1>
            <ul>
                <li className={styles.iconsax_building4}>{t("createAccount.text1")}</li>
                <li className={styles.iconsax_cup}>{t("createAccount.text2")}</li>
                <li className={styles.iconsax_shieldsecurity}>{t("createAccount.text3")}</li>
                <li className={styles.iconsax_profile2user}>{t("createAccount.text4")}</li>
            </ul>
        </div>
        <form action="">
            <div className="row">
                <input type="text" name="name" id="" placeholder={t('account.name')} />
                <input type="password" name="first" id="" placeholder={t('account.firstname')} />
            </div>
            <div className="row">
            <input type="text" name="email" id="" placeholder={t('login.email')} />
            <input type="password" name="password" id="" placeholder={t('login.pass')} />
            </div>
            <div className="row">
            <input type="text" name="email" id="" placeholder={t('login.email')} />
            <input type="password" name="password" id="" placeholder={t('login.pass')} />
            </div>
        </form>
      </div>
      <div className={styles.create_account_footer + " slide-in"}>
        <p>Vous avez déjà un compte ?</p>
        <span onClick={() => setLogin(true)}>Login</span>
        <NavLink to="/">
            <div className={styles.navigation_logo}></div>
          </NavLink>
      </div>
      </div>
  );
}
