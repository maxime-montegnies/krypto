import { useParams } from "react-router-dom";
import PoolCard from "../components/Pool/PoolCard";
import useFetch from "react-fetch-hook";
import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../components/SectionTemplates";
import useFetchData from "../utils/useFetchData";
import Filters from "../components/Filters";
import { useState } from "react";

export default function Marketplace(props) {
  const { t } = useTranslation();
  const addParams = (obj) => {
    let params = ""
    for (const key in filters) {
      params += `&${key}=${filters[key]}`
    }
    params = params.replace(params[0], '?');
    return params;
  }
  const [filters, setFilters] = useState({ 'results': '10' });
  const [dataUrl, setDataUrl] = useState("https://randomuser.me/api/" + addParams(filters));
  const filterChanged = (e) => {
    const _filters = filters;
    for (const key in _filters) {
      _filters[e.name] = e.value;
    }
    setFilters(_filters);
    const params = addParams(filters)

    console.warn("https://randomuser.me/api/" + params)
    setDataUrl("https://randomuser.me/api/" + params)
  }
  const data = useFetchData(dataUrl, []);



  const LoadItems = () => {
    let menuItems = [];
    for (var i = 0; i < parseInt(filters.results); i++) {
      menuItems.push(<li className={styles.tmp2} style={{ opacity: 0.2 }}>
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
      <Filters filterChanged={filterChanged} />
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
