import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../components/SectionTemplates";
import useFetchData from "../utils/useFetchData";
import Filters from "../components/Filters";
import { useEffect, useState } from "react";

export default function Marketplace(props) {
  console.log('RENDER Marketplace');
  const { t } = useTranslation();
  const [filtersData, setFiltersData] = useState([
    {
      name: "gender",
      label: "Gender",
      value: "",
      values: [
        {
          "label": "All",
          "value": ""
        },
        {
          "label": "Male",
          "value": "male"
        }
        ,
        {
          "label": "Female",
          "value": "female"
        }
      ]
    }
    ,
    {
      name: "results",
      label: "Results",
      value: "10",
      values: [
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
        ,
        {
          "label": "50",
          "value": "50"
        }
        ,
        {
          "label": "100",
          "value": "100"
        }
        ,
        {
          "label": "150",
          "value": "150"
        }
        ,
        {
          "label": "200",
          "value": "200"
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
  const data = useFetchData("https://randomuser.me/api/" + addParams(filtersData), [filtersData]);



  const LoadItems = () => {
    // return <></>;
    let menuItems = [];
    // for (var i = 0; i < parseInt(filtersData. . . . ..results); i++) {
    for (var i = 0; i < parseInt(10); i++) {
      menuItems.push(<li key={i} className={styles.tmp2} style={{ opacity: 0.2 }}>
        <span />
      </li>);
    }
    return <ul className={styles.tmp1}>{menuItems}</ul>;
  }
  return (
    <>
      <SectionTitle
        title={t("marketplace.title")}
        subtitle={t("marketplace.subtitle")}
        text={t("marketplace.text")}
      />
      <Filters setFilter={setFiltersData} filters={filtersData} />
      <div>
        {data.isLoading ? (
          <>
            <LoadItems />
          </>
        ) : (
          <>
            <ul className={styles.tmp1}>
              {data.data.results.map(function (element, i) {
                return (
                  <li key={i} className={styles.tmp2 + " slide-in"}>
                    <h1>{element.name.first}</h1>
                    <img style={{ borderRadius: "50%", filter: "grayscale(0.9)" }} src={element.picture.large} />
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
