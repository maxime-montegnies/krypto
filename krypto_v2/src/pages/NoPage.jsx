import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";

export default function NoPage(props) {
    const {t} = useTranslation();
  return (
    <>
        <div className={styles.section_header}>
          <h3>{t('notFound.subtitle')}</h3>
          <header>
            <div>
              <h1>{t('notFound.title')}</h1>
              <p>{t('notFound.text')}</p>
            </div>
          </header>
          <div>
            
          </div>
        </div>
    </>
  );
}
