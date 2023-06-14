import PoolCard from "../components/Pool/PoolCard";
import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../components/SectionTemplates";
import useFetchData from "../utils/useFetchData";
import Filters from "../components/Filters";
import { useState } from "react";

export default function Pools(props) {
  console.log('RENDER Pools');
  const { t } = useTranslation();
  const [filtersData, setFiltersData] = useState([
    {
      name: "count",
      label: "Results",
      value: "10",
      values: [
        {
          "label": "2",
          "value": "2"
        },
        {
          "label": "5",
          "value": "5"
        },
        {
          "label": "10",
          "value": "10"
        },
        {
          "label": "20",
          "value": "20"
        }
      ]
    },
    {
      name: "investmentValue",
      label: "Investment Value",
      value: "1",
      values: [
        {
          "label": "DESC",
          "value": "-1"
        },
        {
          "label": "ASC",
          "value": "1"
        }
      ]
    }
  ]);

  const addParams = (obj) => {
    let params = ""
    obj.forEach(element => {
      params += `&${element.name}=${element.value}`
    });
    return params.replace(params[0], '?');
  }
  const pools = useFetchData("/data/pools" + addParams(filtersData), [filtersData]);
  // const pools = useFetchData("/data/pools?count=100");
  return (
    <>
      <SectionTitle title={t("pools.title")} subtitle={t("pools.subtitle")} text={t("pools.text")} />
      <Filters setFilter={setFiltersData} filters={filtersData} />
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
