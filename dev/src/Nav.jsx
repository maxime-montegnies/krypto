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
              <li onClick={() => changeLocale("en")}>En</li>
              <li onClick={() => changeLocale("fr")}>Fr</li>
              <li onClick={() => setLogin(true)}>Login</li>
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
              <li onClick={() => changeLocale("en")}>En</li>
              <li onClick={() => changeLocale("fr")}>Fr</li>
              <li onClick={() => setLogin(true)}>Login</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
