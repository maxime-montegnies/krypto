import { useEffect, useRef, useState } from "react";
import useApp from "../store/useApp";
import styles from "../style/style.module.scss";
// import { useTranslation } from "react-i18next";
import useFetchData from "../utils/useFetchData";

export default function HomeWhoWeAre(props) {
  //   const { t } = useTranslation();
  const [inc, setInc] = useState(0);
  const [incDirection, setIncDirection] = useState(1);
  const data = useFetchData("https://randomuser.me/api/?results=20", []);
  const container = useRef();
  const arrowLeft = useRef();
  const arrowRight = useRef();
  const setUpdateIntersectionObserver = useApp(
    (state) => state.setUpdateIntersectionObserver
  );
  useEffect(() => {
    if (data.isLoading) return;
    if (container.current) {
      const highlightedItems = container.current.querySelectorAll(".fade-in");
      highlightedItems.forEach((userItem, i) => {
        if (incDirection < 0) {
          if (inc == i - 2) {
          // if (inc < i - 1) {
            userItem.classList.remove('appear');
          }
          // if (i ==inc-1 ) {
          //   // if (i <inc + 1) {
          //     userItem.classList.remove('appear');
          //   }
        }
        if (incDirection > 0) {
          if (i ==inc ) {
          // if (i <inc + 1) {
            userItem.classList.remove('appear');
          }
          // if (i == inc+3) {
          //   // if (inc < i - 1) {
          //     userItem.classList.remove('appear');
          //   }
        }
      });
      setUpdateIntersectionObserver()
      container.current.style.transform = "translateX(-" + inc * 220 + "px)";
      const maxInc = container.current.childElementCount - 3;
      
      arrowRight.current.classList.toggle(styles.disable, inc == maxInc);
      arrowLeft.current.classList.toggle(styles.disable, inc == 0);
    }
  }, [inc, data.isLoading]);
  const clickLeft = () => {
    setIncDirection(1);
    setInc((prevCount) => (prevCount >= 1 ? prevCount - 1 : prevCount));
  };
  const clickRight = () => {
    setIncDirection(-1);
    const maxInc = container.current.childElementCount - 3;
    setInc((prevCount) => (prevCount < maxInc ? prevCount + 1 : prevCount));
  };
  return (
    <>
      <div className={styles.home_whoweare_people}>
        {data.isLoading ? (
          <>
            <h1>Loading</h1>
          </>
        ) : (
          <>
            <div className={styles.home_whoweare_people_container}>
              <ul ref={container}>
                {data.data.results.map(function (element, i) {
                  return (
                    <li key={i} className="fade-in">
                      <img src={element.picture.large} />
                      <h1>
                        {element.name.first} {element.name.last}
                      </h1>
                      <h2>{element.gender}</h2>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div ref={arrowLeft}
              className={styles.home_whoweare_people_arrow_left}
              onClick={clickLeft}
            ></div>
            <div ref={arrowRight}
              className={styles.home_whoweare_people_arrow_right}
              onClick={clickRight}
            ></div>
          </>
        )}
      </div>
    </>
  );
}
