import { Outlet, Link, NavLink } from "react-router-dom";
import Nav from "./Nav";
import styles from './style/style.module.scss';

const Layout = () => {
  return (
    <div className="appContainer">
      <Nav />
      <div className="mainContent">
        <Outlet />
      </div>
      <footer>
        <h1>FOOTER</h1>
      </footer>
    </div>
  )
};

export default Layout;