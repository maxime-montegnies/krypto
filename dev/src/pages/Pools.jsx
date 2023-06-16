import PoolCard from "../components/Pool/PoolCard";
import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../components/SectionTemplates";
import useFetchData from "../utils/useFetchData";
import { useState } from "react";
import Filters from "../components/Filters/Filters";

const objFilter = {
  "service":"/data/pools",
  "url":"/data/pools?count=10&location=",
  "orderBy":{
    "value":"investmentValue",
    "direction":"",
    "values":[ 
      {
        "value":"investmentValue",
        "label":"Investment Value"
      },
      {
        "value":"expertValue",
        "label":"Expert Value"
      },
      {
        "value":"numberOfNFTs",
        "label":"number Of NFTs"
      },
      {
        "value":"initialShareValue",
        "label":"Initial Share Value"
      }
    ]
  },
  "filterBy":
    [
      {
        name: "location",
        label: "Location",
        showInUi:true,
        value: "",
        values: [
          {
            "label": "All",
            "value": ""
          },
          {
            "label": "Metz",
            "value": "Metz"
          },
          {
            "label": "Paris",
            "value": "Paris"
          }
        ]
      },
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
      }
    ]
}

export default function Pools(props) {
  console.log('RENDER Pools');
  const { t } = useTranslation();
  const [filtersData, setFiltersData] = useState(objFilter);

  
  // const pools = useFetchData("/data/pools" + addParams(filtersData), [filtersData]);
  const pools = useFetchData(filtersData.url, [filtersData]);
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
