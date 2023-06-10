import { useParams } from "react-router-dom";
import PoolCard from "../components/Pool/PoolCard";
import useFetch from "react-fetch-hook";
import styles from "../style/style.module.scss";

export default function Marketplace(props) {
  return (
    <>
        <div className={styles.section_header}>
          <h3>Investissement</h3>
          <header>
            <div>
              <h1>
              Rejoignez une pool d’investissement
              </h1>
              <p>
              Découvrez le système de mint KryptoStone. Ce dernier vous permet de rejoindre une pool d’investissement et participer à l’évolution du projet.
              </p>
            </div>
          </header>
          <div>
            <h1>...</h1>
          </div>
        </div>
    </>
  );
}
