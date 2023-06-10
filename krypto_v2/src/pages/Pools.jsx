import { useParams } from "react-router-dom";
import PoolCard from "../components/Pool/PoolCard";
import useFetch from "react-fetch-hook";
import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";

export default function Pools(props) {
  const {t} = useTranslation();
  const pools = useFetch("http://localhost:8080/data/pools?count=100");
  return (
    <>
      <div className={styles.section_header}>
        <h3>{t("pools.subtitle")}</h3>
        <header>
          <div>
            <h1>{t("pools.title")}</h1>
            <p>{t("pools.text")}</p>
          </div>
        </header>
      </div>
        
          <div className={styles.home_discover__pool}>
            <div className={styles.home_discover__pool__content}>
            <ul>
              {pools.isLoading ? (
                <>
                <li className={styles.pool_card}></li>
                <li className={styles.pool_card}></li>
                <li className={styles.pool_card}></li>
                <li className={styles.pool_card}></li>
                <li className={styles.pool_card}></li>
                <li className={styles.pool_card}></li>
                <li className={styles.pool_card}></li>
                <li className={styles.pool_card}></li>
                </>
              ) : (
                    <>
                  {pools.data.map(function (element, i) {
                    return (
                      <li key={i}>
                        <PoolCard
                          hasLink={true}
                          hasValue={true}
                          element={element}
                        />
                      </li>
                    );
                  })}
                  <li className={styles.pool_card_more_soon}>
                    <span>{t("pools.soon")}</span>
                  </li>
                  </>
              )}
                </ul>
            </div>
          </div>
        
    </>
  );
}
