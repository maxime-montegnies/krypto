import { useParams } from "react-router-dom";
import PoolCard from "../components/Pool/PoolCard";
import useFetch from "react-fetch-hook";
import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";

export default function Marketplace(props) {
  const {t} = useTranslation();
  return (
    <>
        <div className={styles.section_header}>
        <h3>{t("marketplace.subtitle")}</h3>
          <header>
            <div>
              <h1>{t("marketplace.title")}</h1>
              <p>{t("marketplace.text")}</p>
            </div>
          </header>
          <div>
            <h1>...</h1>
          </div>
        </div>
    </>
  );
}
