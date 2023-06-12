import { useEffect, useRef, useState } from "react";
import styles from "../style/style.module.scss";
// import { useTranslation } from "react-i18next";
import useFetchData from "../utils/useFetchData";

const HomeTestimonialsList = (props) => {
  const data = props.data;
  return (

    <ul data-group={props.group}>
      {data.data.results.map(function (element, i) {
        return (
          <li key={i} className={" fade-in"}>
            <div className={styles.frame__top}>
              <img src={element.picture.large} />
              <h1>
                {element.name.first} {element.name.last}
              </h1>
              <h2>{element.gender}</h2>
              <p>{element.location.street.number} {element.location.street.name}, {element.location.state}, {element.location.postcode}, {element.location.city}, {element.location.country}</p>
            </div>
          </li>
        );
      })}
    </ul>

  )
}
export default function HomeTestimonials(props) {
  //   const { t } = useTranslation();
  const [inc, setInc] = useState(1);
  const data = useFetchData("https://randomuser.me/api/?results=10", []);
  const container = useRef();
  const arrowLeft = useRef();
  const arrowRight = useRef();
  useEffect(() => {
    if (container.current){
      const maxInc = container.current.firstChild.childElementCount - 1;
      container.current.style.transform = "translateX(-" + inc * ((420 + 40) * 1) + "px)";
      arrowRight.current.classList.toggle(styles.disable, inc==maxInc);
      arrowLeft.current.classList.toggle(styles.disable, inc==1);
    }
  }, [inc, data.isLoading]);
  const clickLeft = () => {
    setInc((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };
  const clickRight = () => {
    const maxInc = container.current.firstChild.childElementCount - 1;
    setInc((prevCount) => (prevCount < maxInc ? prevCount + 1 : prevCount));
    // setInc((prevCount) => (prevCount + 1 ));
  };
  return (
    <>
      <div className={styles.home_testimonials}>
        {data.isLoading ? (
          <>
            <h1>Loading</h1>
          </>
        ) : (
          <>
            <div className={styles.home_testimonials_container}>
              <div ref={container} >
                <HomeTestimonialsList group="group1" data={data} {...props} />
                {/* <HomeTestimonialsList group="group2" data={data} {...props} /> */}
              </div>
            </div>

            <div ref={arrowLeft}
              className={styles.home_testimonials_arrow_left}
              onClick={clickLeft}
            ></div>
            <div ref={arrowRight}
              className={styles.home_testimonials_arrow_right}
              onClick={clickRight}
            ></div>
          </>
        )}
      </div>
    </>
  );
}
