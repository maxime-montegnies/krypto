import styles from "./style/style.module.scss";
import { NavLink } from "react-router-dom";

import { useRef, useEffect, useState, useContext } from "react";
import useApp from "./store/useApp";
import LocaleContext from "./LocaleContext";
import i18n from "./i18n";

export default function Nav(props) {
    console.log('RENDER NAV')

    const { locale } = useContext(LocaleContext);

  function changeLocale (l) {
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
      <nav>
        <ul className={styles.navigation_items}>
          {nav.map(function (element, i) {
            return (
              <li key={i}>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  to={element.path}
                >
                  {element.label}
                </NavLink>
              </li>
            );
          })}
          <li onClick={() => changeLocale('en')}>En</li>
          <li onClick={() => changeLocale('fr')}>Fr</li>
        </ul>
      </nav>
    </div>
  );
}
