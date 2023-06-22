import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Mint from "./pages/Mint.jsx";
import Faq from "./pages/Faq.jsx";
import NoPage from "./pages/NoPage.jsx";
import "./style/style.scss";
// import Scrollbar from 'react-smooth-scrollbar';
import PoolDetail from "./pages/PoolDetail.jsx";
import Pools from "./pages/Pools.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import LocaleContext from "./LocaleContext";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import useApp from "./store/useApp.jsx";
import AccountCreate from "./pages/AccountCreate.jsx";
import {NumberSettings} from "./utils/Utils"
import { useTranslation } from "react-i18next";
let observer;
const updateObserver = () => {
  const observedNodes = document.querySelectorAll('.fade-in, .slide-in');
  if (observer) {
    observer.disconnect();
  }
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target)
        // setObservedNodes((observedNodes) =>
        //   observedNodes.filter((node) => node !== entry.target)
        // );
      }
    }
  }, {});
  for (const node of observedNodes) {
    if (node) observer.observe(node);
  }
};
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    // document.documentElement.scrollTo(0, 0);
    // console.warn(location.pathname);
    // console.warn(document.querySelectorAll('.fade-in'))
    updateObserver(document.querySelectorAll('.fade-in, .slide-in'))
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional if you want to skip the scrolling animation
    });
  }, [location.pathname]);
  return children;
};

export default function App() {
  const [locale, setLocale] = useState(i18n.language);
  const { t } = useTranslation();

  const updateIntersectionObserver = useApp((state) => state.updateIntersectionObserver)
  useEffect(() => {

    const _Page = useApp.subscribe(
      (state) => state.updateIntersectionObserver,
      (value) => {
        // console.log(`SET PAGE ${value}`);
        // console.warn("!!!!! pools.isLoading changed")
        updateObserver();
      }
    );
    return () => {
      _Page();
    };

  }, [updateIntersectionObserver]);

  console.warn('RENDER APP')
  const handleLanguageChanged = useCallback(() => {
    console.warn('LANG CHANGED')
    setLocale(i18n.language)
    NumberSettings.decimalSeparator = t("misc.decimalSeparator");
    NumberSettings.thousandSeparator = t("misc.thousandSeparator");
    NumberSettings.surfaceUnit = t("misc.surfaceUnit");
    NumberSettings.surfaceMultiplyer = t("misc.surfaceMultiplyer");
  }, []);
  useEffect(() => {
    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [handleLanguageChanged]);
  useEffect(() => {
    console.warn('i18n.language', i18n.language)
    handleLanguageChanged()
  }, []);
  return (
    <>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Helmet htmlAttributes={{
          lang: locale
        }} />
        <Router>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="pool/:id" element={<PoolDetail />} />
                <Route path="pools" element={<Pools />} />
                <Route path="marketplace" element={<Marketplace />} />
                <Route path="mint" element={<Mint />} />
                <Route path="faq" element={<Faq />} />
                <Route path="create_account" element={<AccountCreate />} />

                {/* <Route path="blogs" element={<h1>Blog</h1>} /> */}
                {/* <Route path="contact" element={<Contact />} /> */}
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </Wrapper>
        </Router>
      </LocaleContext.Provider>
    </>
  );
}
