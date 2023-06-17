import { useParams } from "react-router-dom";
import styles from "../style/style.module.scss";
import { NavLink } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import PoolCardDetails from "../components/Pool/PoolCardDetails";
import useFetchData from "../utils/useFetchData";

export default function PoolDetail(props) {
  const { t } = useTranslation();
  const { id } = useParams();
  const pool = useFetchData("/data/pool/" + id);
  //

  return (
    <>
      <div className={styles.section_header + " slide-in"}>
        <h3>{t("pool.subtitle")}</h3>
        <header>
          <div className={styles.section_header_column}>
            <h1>
              {t("pool.title")}
              <span />
              {!pool.isLoading && pool.data.label}
            </h1>
            <p>{t("pool.text")}</p>
          </div>
          <div className={styles.section_header_column}>
            <p><Trans t={t}>pool.text2</Trans></p>
            <NavLink to="/pools" className={styles.button_green}>{t("pool.backToPools")}</NavLink>
          </div>
        </header>

        <PoolCardDetails pool={pool}/>

      </div>
    </>
  );
}
