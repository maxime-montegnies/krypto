import { useEffect, useState } from 'react'
import styles from "../style/style.module.scss";
import { NavLink } from "react-router-dom";
import Pool from '../components/Pool/Pool';

export default function Home({ }) {
  const [pools, setPools] = useState([])
  const getPools = async () => {
    console.log('getPeople')
    const response = await fetch('/data/pools.json')
    await new Promise(resolve => setTimeout(resolve, 1000));
    const result = await response.json()
    setPools(result.pools)
  }
  useEffect(() => {
    getPools()
  }, [])
  const partners = ["partner_01.png", "partner_02.png", "partner_03.png", "partner_04.png", "partner_05.png", "partner_06.png"]
  const press = ["press_01.png", "press_02.png", "press_03.png", "press_04.png", "press_05.png"]
  return (
    <div>
      <div className={styles.home_hero__section + ' ' + styles.home_frame__top}>
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

        <div className={styles.home__title}>
          <h3>Investissement</h3>
          <h2>Découvrez nos pools d’investissement</h2>
        </div>

        <div className={styles.home_discover__pool__content}>
          {pools.length == 0 && <div className='loader'><h1>loading</h1></div>}

          {pools.length > 0 && <ul>
            {pools.map(function (element, i) {
              if (i < 3)
                return (
                  <Pool key={i} element={element} />
                );
            })}
            <li className={styles.see_more}>Voir plus de Pools d’investissements</li>
          </ul>}
        </div>
      </div>



      <div className={styles.home_discover__information}>
        <div className={styles.home__title}>
          <h3>Information</h3>
          <h2>Comment fonctionne l’écosystème Kryptostone ?</h2>
        </div>
      </div>



      <div className={styles.home_discover__information}>
        <div className={styles.home__title}>
          <h3>Information</h3>
          <h2>Pourquoi investir avec KryptoStone ?</h2>
        </div>
        <div className={styles.home_whyinvest}>
          <ul>
            <li>
              <h1>01. La <b>qualité</b> de nos acquisitions</h1>
              <p>Nous investissons dans des biens immobiliers de qualité, tels que des friches, des terrains, des forêts, et des bâtiments historiques, pour assurer des rendements solides à long terme.</p>
            </li>
            <li>
              <h1>02. L’association de l’<b>immobilier</b> et des <b>actifs numériques</b></h1>
              <p>Grâce à la technologie blockchain, nous combinons l’investissement immobilier traditionnel avec des actifs numériques, offrant ainsi des opportunités d'investissement uniques.</p>
            </li>
            <li>
              <h1>03. <b>Investissement</b>, développement <b>durable</b> et <b>sociétal</b></h1>
              <p>Notre approche holistique vise à créer de la valeur non seulement pour nos investisseurs, mais aussi pour la société dans son ensemble.</p>
            </li>
            <li>
              <h1>04. L’<b>accessibilité</b> de l’investissement immobilier</h1>
              <p>Chez KryptoStone, nous pensons que chacun devrait pouvoir investir dans l'immobilier, à partir de quelques dizaines d'euros seulement.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.home_frame__bottom}>
        <div className={styles.home__title}>
          <h3>Information</h3>
          <h2>Qui sommes-nous ?</h2>
        </div>

        <div className={styles.home_whoweare}>

          <p>
            KryptoStone est une fintech française créée en 2021 par une équipe d'experts du monde de l’investissement immobilier et de la blockchain. Nous croyons que la technologie blockchain peut offrir une solution pour faciliter l'investissement immobilier en réduisant les obstacles à l'entrée, en offrant une plus grande transparence et en renforçant la sécurité des investissements.
          </p>

        </div>
      </div>



      <div className={styles.home_discover__information}>
        <div className={styles.home__title}>
          <h3>Rejoignez la communauté</h3>
          <h2>Ils nous font déjà confiance</h2>
        </div>
      </div>



      <div className={styles.home_discover__information}>
        <div className={styles.home__title}>
          <h3>Partenaires</h3>
          <h2>Ils nous soutiennent au quotidien</h2>
        </div>
      </div>
      <div className={styles.home_partners}>
        <ul>
          {partners.map(function (element, i) {
            return (
              <li key={i} style={{ backgroundImage: "url('/images/" + element + "')" }} ></li>
            );
          })}
        </ul>
        <p>...et plus de 30 investisseurs, marchands de biens et promoteurs immobilier</p>
      </div>




      <div className={styles.home_discover__information}>
        <div className={styles.home__title}>
          <h3>Press & Blog</h3>
          <h2>Ils parlent de nous</h2>
        </div>
      </div>
      <div className={styles.home_press}>
      <ul>
        {press.map(function (element, i) {
          return (
            <li key={i} style={{backgroundImage:"url('/images/"+element+"')"}} ></li>
            );
          })}
        </ul>
        <p>...et plus d’une dizaine d’autres médias</p>
      </div>



      <div className={styles.home_discover__information}>
        <div className={styles.home__title}>
          <h3>Contact</h3>
          <h2>Besoin de plus d’informations ?</h2>
        </div>
      </div>


    </div>
  );
}
