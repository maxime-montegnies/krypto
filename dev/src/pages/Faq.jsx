import styles from "../style/style.module.scss";
import { formatInc } from "../utils/Utils";
import { SectionTitle } from "../components/SectionTemplates";
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";
import { useContext, useEffect, useState } from "react";
import useFetchData from "../utils/useFetchData";
// import useFetch from "react-fetch-hook";


export default function Faq(props) {
  console.log('RENDER FAQ')
  const { locale } = useContext(LocaleContext);
  const [locale2, setLocal2] = useState(locale);
  useEffect(()=>{
    setLocal2(locale.includes("-") ? locale.slice(0, locale.indexOf("-")) : locale)
  }, [locale])
  // const locale  = _locale && _locale.includes("-") ? _locale.slice(0, _locale.indexOf("-")) : _locale;
//   const faqs = useFetchData("/data/faq/?lang="+locale, [locale]);
  const faqs = useFetchData("/data/faq.json", []);
  // const faqs = useFetch("http://localhost:8082/data/faq.json");
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
              <div className="column">
                {
                  faqs.data[locale2] && faqs.data[locale2].map(function (element, i) {
                    if(i%2==0)
                  return (
                    <li key={i} onClick={(e) => { reveal(e); }} className = "fade-in">
                      <h1>
                        {formatInc(i)}. {element.q}
                      </h1>
                      <p>{element.a}</p>
                    </li>
                  );
                })}
            </div>
            <div className="column">
                {faqs.data[locale2] && faqs.data[locale2].map(function (element, i) {
                    if(i%2==1)
                  return (
                    <li key={i} onClick={(e) => { reveal(e); }} className = "fade-in">
                      <h1>
                        {formatInc(i)}. {element.q}
                      </h1>
                      <p>{element.a}</p>
                    </li>
                  );
                })}
            </div>
              </>
            )}
          </ul>
        </div>
    </>
  );
}
