import { useEffect, useRef, useState } from "react";
import styles from "../style/style.module.scss";
// import { useTranslation } from "react-i18next";
import useFetchData from "../utils/useFetchData";

export default function HomeWhoWeAre(props) {
  //   const { t } = useTranslation();
  const [inc, setInc] = useState(0);
  const data = useFetchData("https://randomuser.me/api/?results=20", []);
  const container = useRef();
  useEffect(() => {
    if (container.current)
      container.current.style.transform = "translateX(-" + inc * 220 + "px)";
  }, [inc]);
  const clickLeft = () => {
    setInc((prevCount) => (prevCount >= 0 ? prevCount - 1 : prevCount));
  };
  const clickRight = () => {
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
            <div
              className={styles.home_whoweare_people_arrow_left}
              onClick={clickLeft}
            ></div>
            <div
              className={styles.home_whoweare_people_arrow_right}
              onClick={clickRight}
            ></div>
          </>
        )}
      </div>
    </>
  );
}
