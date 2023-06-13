import styles from "../style/style.module.scss";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../components/SectionTemplates";

export default function NoPage(props) {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title={t("notFound.title")} subtitle={t("notFound.subtitle")} text={t("notFound.text")} />
    </>
  );
}
