import { useParams } from "react-router-dom";
import PoolCard from "../components/Pool/PoolCard";
import useFetch from "react-fetch-hook";
import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";
import useApp from "../store/useApp";
import { useEffect } from "react";
import { SectionTitle } from "../components/SectionTemplates";

export default function Pools(props) {
  const { t } = useTranslation();
  const pools = useFetch("http://localhost:8080/data/pools?count=100");
  // Animation Observers
  const setUpdateIntersectionObserver = useApp((state) => state.setUpdateIntersectionObserver)
  useEffect(() => {
    setUpdateIntersectionObserver()
  }, [pools.isLoading]);
  //

  return (
    <>
      <SectionTitle title={t("pools.title")} subtitle={t("pools.subtitle")} text={t("pools.text")} />
      <div className={styles.home_discover__pool + " slide-in"}>
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
