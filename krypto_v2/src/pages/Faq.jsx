import useFetch from "react-fetch-hook";
import styles from "../style/style.module.scss";
import { formatInc } from "../utils/Utils";
import { SectionTitle } from "../components/SectionTemplates";
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";
import { useContext, useEffect } from "react";
import useApp from "../store/useApp";


export default function Faq(props) {
  const { locale } = useContext(LocaleContext);
  const faqs = useFetch("http://localhost:8080/data/faq/?lang="+locale, [locale]);
  
  const reveal = (e) => {
    e.target.parentNode.classList.toggle(styles.open);
  };
  const { t } = useTranslation();
  
  const setUpdateIntersectionObserver = useApp((state) => state.setUpdateIntersectionObserver)
  useEffect(() => {
    setUpdateIntersectionObserver()
  }, [faqs.isLoading]);

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
                {faqs.data.map(function (element, i) {
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
