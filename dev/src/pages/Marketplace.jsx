import { useParams } from "react-router-dom";
import PoolCard from "../components/Pool/PoolCard";
import useFetch from "react-fetch-hook";
import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../components/SectionTemplates";
import useFetchData from "../utils/useFetchData";

export default function Marketplace(props) {
  const { t } = useTranslation();
  const data = useFetchData("https://randomuser.me/api/?results=200", []);
  return (
    <>
      <SectionTitle
        title={t("marketplace.title")}
        subtitle={t("marketplace.subtitle")}
        text={t("marketplace.text")}
      />
      <div>
        {data.isLoading ? (
          <>
            <h1>Loading</h1>
          </>
        ) : (
          <>
            <ul className={styles.tmp1}>
              {data.data.results.map(function (element, i) {
                return (
                  <li key={i} className={styles.tmp2 + " slide-in"}>
                    <h1>{element.name.first}</h1>
                    <img style={{borderRadius:"50%", filter: "grayscale(0.9)"}} src={element.picture.large} />
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
