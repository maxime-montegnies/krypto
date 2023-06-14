import styles from "./style/style.module.scss";
import { NavLink } from "react-router-dom";

import { useRef, useEffect, useState, useContext } from "react";
import useApp from "./store/useApp";
import LocaleContext from "./LocaleContext";
import i18n from "./i18n";

export default function Nav(props) {
  console.log("RENDER NAV");
  const navBurger = useRef();
  const navBurgerClick = function () {
    navBurger.current.classList.toggle(styles.active);
  };
  const navClick = function () {
    navBurger.current.classList.add(styles.active);
  };
  const setLogin = useApp((state) => state.setLogin);
  const { locale } = useContext(LocaleContext);
  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  const nav = [
    {
      label: "Pools",
      path: "/pools",
    },
    {
      label: "Marketplace",
      path: "/marketplace",
    },
    {
      label: "FAQ",
      path: "/faq",
    },
    {
      label: "Mint",
      path: "/mint",
    },
  ];
  return (
    <div className={styles.navigation}>
      <NavLink to="/">
        <div className={styles.navigation_logo}></div>
      </NavLink>
      <div className={styles.navigation_nav}>
      <div className={styles.navigation_nav_desktop}>
          <nav>
            <ul className={styles.navigation_items}>
              {nav.map(function (element, i) {
                return (
                  <li key={i}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.active : ""
                      }
                      to={element.path}
                    >
                      {element.label}
                    </NavLink>
                  </li>
                );
              })}
              <li><a className={styles.button_white + ' ' + styles.button_ico + ' ' + styles.iconsax_key} onClick={() => setLogin(true)}>Login</a></li>
              <li className={styles.navigation_items_locales}>
                <ul>
                {locale.includes("fr") && <li onClick={() => changeLocale("en")}>En</li>}
              {locale.includes("en") && <li onClick={() => changeLocale("fr")}>Fr</li>}
                </ul>
              </li>
            </ul>
          </nav>
        </div>



        <div className={styles.navigation_nav_mobile}>
          <nav>
            <div
              ref={navBurger}
              className={styles.navigation_burger + " " + styles.active}
              onClick={navBurgerClick}
            ></div>
            <ul className={styles.navigation_items}>
              {nav.map(function (element, i) {
                return (
                  <li key={i}>
                    <NavLink
                      onClick={navClick}
                      className={({ isActive }) =>
                        isActive ? styles.active : ""
                      }
                      to={element.path}
                    >
                      {element.label}
                    </NavLink>
                  </li>
                );
              })}
              <li><a onClick={() => setLogin(true)}>Login</a></li>
              {locale.includes("fr") && <li onClick={() => {changeLocale("en"); navBurgerClick()}}>En</li>}
              {locale.includes("en") && <li onClick={() => {changeLocale("fr"); navBurgerClick()}}>Fr</li>}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
