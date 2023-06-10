import { useRef, useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Nav from "./Nav";
import styles from "./style/style.module.scss";
// import Scrollbar from "react-smooth-scrollbar";
let oldScroll = 0;
const Layout = () => {
  const nav = useRef();
  const onScroll = (e) => {
    // console.warn(e);
    // console.warn(window);
    
    if (oldScroll - window.pageYOffset < 0) {
      nav.current.classList.add(styles.hide);
    } else {
      nav.current.classList.remove(styles.hide);
    }
    oldScroll = window.pageYOffset;
    var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
    if(window.pageYOffset>=(_docHeight-window.outerHeight)) nav.current.classList.remove(styles.hide);
    
    // nav.current.style.top = e.offset.y + "px";
    // if(oldScroll - e.offset.y < 0) {
    //   nav.current.classList.add(styles.hide)
    // } else {
    //   nav.current.classList.remove(styles.hide)
    // }
    // oldScroll = e.offset.y;
  };
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return function cleanup() {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* <Scrollbar
      damping={0.1}
      thumbMinSize={20}
      syncCallbacks={true}
      renderByPixels={true}
      alwaysShowTracks={false}
      continuousScrolling={true}
      wheelEventTarget={null}
      plugins={{}}
      onScroll={onScroll}
    > */}
      <div className="appContainer">
        <div className="mainContent">
        <div className={styles.navigation_container} ref={nav}>
          <Nav />
        </div>
          <Outlet />
        </div>
        <footer>
          <ul className="footer_legals">
            <li>© 2023 Kryptostone</li>
            <li><a href="#" target="blank">Mentions légales</a></li>
          </ul>
          <ul className="footer_social">
            <li><a href="https://twitter.com/KryptoStone_io" target="blank"><img src="/images/twitter.svg"/></a></li>
            <li><a href="https://www.linkedin.com/company/kryptostone/" target="blank"><img src="/images/linkedin.svg"/></a></li>
          </ul>
        </footer>
      </div>
      {/* </Scrollbar> */}
    </>
  );
};

export default Layout;
