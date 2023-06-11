import styles from "../style/style.module.scss";
import { formatInc } from "../utils/Utils";
import { SectionTitle } from "../components/SectionTemplates";
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";
import { useContext, useEffect } from "react";
import useFetchData from "../utils/useFetchData";


export default function Faq(props) {
  const { locale } = useContext(LocaleContext);
//   const faqs = useFetchData("http://localhost:8080/data/faq/?lang="+locale, [locale]);
  const faqs = useFetchData("http://localhost:8080/data/faq.json", []);
//   alert(locale)
  const reveal = (e) => {
    e.target.parentNode.classList.toggle(styles.open);
  };
  const { t } = useTranslation();
  
  
  return (
    <>
        <SectionTitle title={t("faq.title")} subtitle={t("faq.subtitle")} text={t("faq.text")} />
        <div className={styles.faq_content + " slide-in"}>
          <ul style={{opacity:(faqs.isLoading?0.2:1)}}>
            {faqs.isLoading ? (
              <>
                <li>
                  <h1>&nbsp;</h1>
                </li>
                <li>
                  <h1>&nbsp;</h1>
                </li>
                <li>
                  <h1>&nbsp;</h1>
                </li>
                <li>
                  <h1>&nbsp;</h1>
                </li>
                <li>
                  <h1>&nbsp;</h1>
                </li>
                <li>
                  <h1>&nbsp;</h1>
                </li>
              </>
            ) : (
              <>
                {faqs.data[locale].map(function (element, i) {
                  return (
                    <li key={i} onClick={(e) => { reveal(e); }} className = "fade-in">
                      <h1>
                        {formatInc(i)}. {element.q}
                      </h1>
                      <p>{element.a}</p>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
    </>
  );
}
