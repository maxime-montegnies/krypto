import { useParams } from "react-router-dom";
import PoolCard from "../components/Pool/PoolCard";
import useFetch from "react-fetch-hook";
import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../components/SectionTemplates";

export default function Marketplace(props) {
  const {t} = useTranslation();
  return (
    <>
    <SectionTitle title={t("marketplace.title")} subtitle={t("marketplace.subtitle")} text={t("marketplace.text")} />
    </>
  );
}