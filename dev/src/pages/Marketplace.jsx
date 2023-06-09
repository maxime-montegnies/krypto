import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../components/SectionTemplates";
import useFetchData from "../utils/useFetchData";
import Filters from "../components/Filters/Filters";
import { useEffect, useState } from "react";
import useApp from "../store/useApp";


let objFilter = {
  "namespace":"randomuser.me",
  "service":"https://randomuser.me/api/",
  "url":"https://randomuser.me/api/?gender=&results=10",
  "layout":false,
  "filterBy":
    [
      {
        name: "gender",
        label: "Gender",
        value: "",
        showInUi: true,
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
    ]
}



export default function Marketplace(props) {
  console.log('RENDER Marketplace');
  if(useApp.getState().savedFilters[objFilter.namespace]!==undefined){
    objFilter = useApp.getState().savedFilters[objFilter.namespace];
  }
  const { t } = useTranslation();
  const [filtersData, setFiltersData] = useState(objFilter);

  const addParams = (obj) => {
    let params = ""
    obj.filterBy.forEach(element => {
      params += `&${element.name}=${element.value}`
    });
    if(obj.orderBy.direction!==""){
      params += `&order-${obj.orderBy.value}=${obj.orderBy.direction}`;
    }
    return params.replace(params[0], '?');
  }
  
  const data = useFetchData(filtersData.url, [filtersData]);



  const LoadItems = () => {
    // return <></>;
    let menuItems = [];
    // for (var i = 0; i < parseInt(filtersData. . . . ..results); i++) {
    for (var i = 0; i < parseInt(10); i++) {
      menuItems.push(<li key={i} className={styles.tmp2} style={{ opacity: 0.1 }}>
        <span />
      </li>);
    }
    return <ul className={styles.tmp1 }>{menuItems}</ul>;
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
