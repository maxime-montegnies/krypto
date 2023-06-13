import styles from './style/style.module.scss';
import { useRef, useEffect, useState, useContext } from "react";
import useApp from "./store/useApp";
import LocaleContext from "./LocaleContext";
import i18n from "./i18n";


export default function Footer({ }) {
    const { locale } = useContext(LocaleContext);
    function changeLocale (l) {
      if (locale !== l) {
        i18n.changeLanguage(l);
      }
    }
  
    return <>
        <footer>
          <ul className="footer_legals">
            <li>© 2023 Kryptostone</li>
            <li><a href="#" target="blank">Mentions légales</a></li>
          </ul>
          <ul className="footer_lang">
          <li onClick={() => changeLocale('en')}>En</li>
          <li onClick={() => changeLocale('fr')}>Fr</li>
          </ul>
          <ul className="footer_social">
            <li><a href="https://twitter.com/KryptoStone_io" target="blank"><img src="/images/twitter.svg"/></a></li>
            <li><a href="https://www.linkedin.com/company/kryptostone/" target="blank"><img src="/images/linkedin.svg"/></a></li>
          </ul>
        </footer>
    </>
}

