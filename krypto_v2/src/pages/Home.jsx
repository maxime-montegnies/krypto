import styles from "../style/style.module.scss";
import { NavLink } from "react-router-dom";
import PoolCard from "../components/Pool/PoolCard";
import { useTranslation, Trans } from "react-i18next";
import useFetchData from "../utils/useFetchData";
import HomeWhoWeAre from "../components/HomeWhoWeAre";
import HomeTestimonials from "../components/HomeTestimonials";

export default function Home({ }) {
  // DATAS
  // const { isLoading, pools } = useFetch("https://randomuser.me/api");
  // const pools = useFetch('/data/pools.json');
  const { t } = useTranslation();
  const pools = useFetchData("http://localhost:8080/data/pools?count=3");
  const partners = [
    "partner_01.png",
    "partner_02.png",
    "partner_03.png",
    "partner_04.png",
    "partner_05.png",
    "partner_06.png",
  ];
  const press = [
    "press_01.png",
    "press_02.png",
    "press_03.png",
    "press_04.png",
    "press_05.png",
  ];


  
  return (
    <div>
      <div
        className={
          styles.home_hero__section +
          " " +
          styles.section_frame__top +
          " " +
          styles.textured +
          " slide-in"
        }

      >
        <div className={styles.home_hero__section_text}>
          <h2>{t('home.hero_title')}</h2>
          <p>{t('home.hero_text')}</p>
          <ul className={styles.home_hero__section_nav}>
          <li>
            <NavLink to="/blogs">{t('home.hero_invest')}</NavLink>
          </li>
          <li>
            <NavLink to="/yolo">{t('home.hero_learn')}</NavLink>
          </li>
        </ul>
        </div>
        <div className={styles.home_hero__section_image}>
        <figure></figure>

        </div>
        
      </div>

      <div className={styles.home_discover__pool}>
        <div
          className={styles.home__title + " slide-in"}

        >
          <h3>{t('home.invest_subtitle')}</h3>
          <h2>{t('home.invest_title')}</h2>
        </div>

        <div
          className={styles.home_discover__pool__content + " slide-in"}

        >
          {pools.isLoading ? (
            <ul>
              <li className={styles.pool_card}></li>
              <li className={styles.pool_card}></li>
              <li className={styles.pool_card}></li>
              <li className={styles.pool_card_see_more}>
                <NavLink to="/pools">
                  <span>{t('pool.more')}</span>
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul>
              {pools.data.map(function (element, i) {
                if (i < 3)
                  return (
                    <li key={i}>
                      <PoolCard
                        hasLink={true}
                        hasValue={true}
                        element={element}
                      />
                    </li>
                  );
              })}
              <li className={styles.pool_card_see_more}>
                <NavLink to="/pools">
                  <span>{t('pool.more')}</span>
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div
        className={styles.home_discover__information + " slide-in"}

      >
        <div className={styles.home__title}>
          <h3>{t('home.info_subtitle')}</h3>
          <h2>{t('home.info_title')}</h2>
        </div>
      </div>

      <div
        className={styles.home_discover__information + " slide-in"}

      >
        <div className={styles.home__title}>
          <h3>{t('home.why_subtitle')}</h3>
          <h2>{t('home.why_title')}</h2>
        </div>
        <div className={styles.home_whyinvest}>
          <ul>
            <li>
              <h1 style={{ backgroundImage: "url('/images/Iconsax/award.svg')" }} >
                <Trans t={t}>home.invest_01_title</Trans>
              </h1>
              <p>{t('home.invest_01_text')}</p>
            </li>
            <li>
              <h1
                style={{
                  backgroundImage: "url('/images/Iconsax/cardcoin.svg')",
                }}
              >
                <Trans t={t}>home.invest_02_title</Trans>
              </h1>
              <p>{t('home.invest_02_text')}</p>
            </li>
            <li>
              <h1
                style={{
                  backgroundImage: "url('/images/Iconsax/activity.svg')",
                }}
              >
                <Trans t={t}>home.invest_03_title</Trans>
              </h1>
              <p>{t('home.invest_03_text')}</p>
            </li>
            <li>
              <h1
                style={{
                  backgroundImage: "url('/images/Iconsax/building4.svg')",
                }}
              >
                <Trans t={t}>home.invest_04_title</Trans>
              </h1>
              <p>{t('home.invest_04_text')}</p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          styles.section_frame__bottom + " " + styles.textured + " slide-in"
        }

      >
        <div className={styles.home__title}>
          <h3>{t('home.who_subtitle')}</h3>
          <h2>{t('home.who_title')}</h2>
        </div>

        <div className={styles.home_whoweare}>
          <p>{t('home.who_text')}</p>
        </div>
        <HomeWhoWeAre />
      </div>

      <div className={styles.home_discover__information}>
        <div
          className={styles.home__title + " slide-in"}
        >
          <h3>{t('home.join_subtitle')}</h3>
          <h2>{t('home.join_title')}</h2>
        </div>
        <HomeTestimonials />
      </div>

      <div className={styles.home_discover__information}>
        <div
          className={styles.home__title + " slide-in"}

        >
          <h3>{t('home.partner_subtitle')}</h3>
          <h2>{t('home.partner_title')}</h2>
        </div>
      </div>
      <div
        className={styles.home_partners + " slide-in"}

      >
        <ul>
          {partners.map(function (element, i) {
            return (
              <li
                key={i}
                style={{
                  backgroundImage: "url('/images/partners/" + element + "')",
                }}
              ></li>
            );
          })}
        </ul>
        <p>{t('home.partner_text')}</p>
      </div>

      <div className={styles.home_discover__information}>
        <div
          className={styles.home__title + " slide-in"}

        >
          <h3>{t('home.press_subtitle')}</h3>
          <h2>{t('home.press_title')}</h2>
        </div>
      </div>
      <div
        className={styles.home_press + " slide-in"}

      >
        <ul>
          {press.map(function (element, i) {
            return (
              <li
                key={i}
                style={{
                  backgroundImage: "url('/images/press/" + element + "')",
                }}
              ></li>
            );
          })}
        </ul>
        <p>{t('home.press_text')}</p>
      </div>

      <div className={styles.home_discover__information}>
        <div
          className={styles.home__title + " slide-in"}

        >
          <h3>{t('home.contact_subtitle')}</h3>
          <h2>{t('home.contact_title')}</h2>
        </div>
      </div>
    </div>
  );
}
