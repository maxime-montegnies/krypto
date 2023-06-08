import styles from "../style/style.module.scss";
import { NavLink } from "react-router-dom";

export default function Home({}) {
  const pools = [
    {
        label:"Le Corbusier",
        img:"/images/discover__pool_1.jfif"
    },
    {
        label:"Eiffel",
        img:"/images/discover__pool_2.jfif"
    },
    {
        label:"Lloyd Wright",
        img:"/images/discover__pool_3.jfif"
    },
]
  return (
    <div>
      <div className={styles.home_hero__section}>
        <div className={styles.home_hero__section_text}>
          <h2>Investissez dans l’immobilier durable en toute simplicité.</h2>
          <p>
            Notre mission est de rendre l'investissement immobilier durable,
            rentable, vertueux et accessible à tous, par le biais d'un Security
            Token.
          </p>
        </div>
        <ul className={styles.home_hero__section_nav}>
          <li>
            <NavLink to="/blogs">Commencez à investir</NavLink>
          </li>
          <li>
            <NavLink to="/yolo">En apprendre plus</NavLink>
          </li>
        </ul>
        <figure></figure>
      </div>

      <div className={styles.home_discover__pool}>
        <div className={styles.home_discover__pool__title}>
          <h3>Investissement</h3>
          <h2>Découvrez nos pools d’investissement</h2>
        </div>
        <ul className={styles.home_discover__pool__content}>
        {pools.map(function (element, i) {
            return (
              <li style={{backgroundImage:"url('"+element.img+"')"}}>{element.label}</li>
            );
          })}
          <li>swag</li>
        </ul>
      </div>
    </div>
  );
}
