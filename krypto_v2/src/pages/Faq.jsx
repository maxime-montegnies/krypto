import { useParams } from "react-router-dom";
import PoolCard from "../components/Pool/PoolCard";
import useFetch from "react-fetch-hook";
import styles from "../style/style.module.scss";
import { formatInc } from "../utils/Utils";

export default function Faq(props) {
  const faqs = useFetch("http://localhost:8080/data/faq");
  const reveal = (e) => {
    console.log(e.target);
    console.log(e.target.parentNode);
    console.log(e.target.parentNode.querySelector("p"));
    // e.target.parentNode.querySelector("p").classList.toggle("visible");
    e.target.parentNode.classList.toggle(styles.open);
  };
  return (
    <>
      <div className={styles.section_header}>
        <h3>INFORMATIONS</h3>
        <header>
          <div>
            <h1>F.A.Q. (Foire aux questions)</h1>
            <p>
              Cette foire aux questions à pour but de vous apporter un maximum
              d’informations afin de profiter de l’expérience KryptoStone dans
              son entièreté.
            </p>
          </div>
        </header>
        <div className={styles.faq_content}>
          <ul>
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
              </>
            ) : (
              <>
                {faqs.data.map(function (element, i) {
                  return (
                    <li key={i} onClick={(e) => { reveal(e); }} >
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
      </div>
    </>
  );
}
