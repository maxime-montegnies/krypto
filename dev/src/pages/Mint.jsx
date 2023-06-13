import { useParams } from "react-router-dom";
import PoolCard from "../components/Pool/PoolCard";
import useFetch from "react-fetch-hook";
import styles from "../style/style.module.scss";
import { SectionTitle } from "../components/SectionTemplates";
import { useTranslation } from "react-i18next";

export default function Marketplace(props) {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title={t("mint.title")} subtitle={t("mint.subtitle")} text={t("mint.text")} />
    </>
  );
}
