import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect, useState } from "react";
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

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    // document.documentElement.scrollTo(0, 0);
    console.warn(location.pathname);
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

  i18n.on("languageChanged", (lng) => {
    setLocale(i18n.language)
  });

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
