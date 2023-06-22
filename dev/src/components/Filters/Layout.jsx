import styles from "../../style/style.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useApp from "../../store/useApp";

export default function Layout(props) {
  const { t } = useTranslation();
  const [label, setLabel] = useState("");
  const setFiltersLayout = useApp((state) => state.setFiltersLayout);
  // console.log("RENDER SORTS RENDER SORTSRENDER SORTS ", props.filters.orderBy.value)
  // const setFilter = props.setFilter;
  // const localeNamespace = props.filters.localeNamespace?props.filters.localeNamespace:"";
  // const filterChanged = (e) => {
  //     const _filters = JSON.parse(JSON.stringify(props.filters));
  //     _filters.orderBy.value = e.name;
  //     _filters.orderBy.direction = e.value;
  //     setLabel(`(${t(localeNamespace+_filters.orderBy.value)})`);
  //     setFilter((prevVal) => { console.warn("SETfilters", _filters); return _filters });
  // }
  return (
    <>
      <div className={styles.filter + " " + styles.layout}>
        <h1>
          {t("misc.layout")} <small>{label}</small>
        </h1>
        <ul>
          <li>
            <a onClick={() => setFiltersLayout("grid")}>Grid</a>
          </li>
          <li>
            <a onClick={() => setFiltersLayout("list")}>List</a>
          </li>
        </ul>
        {/* <ul>
                    {props.filters.orderBy.values.map(function (element, i) {
                        return (
                            <SortUnit {...props} filterChanged={filterChanged} data={element} value={props.filters.orderBy.value} direction={props.filters.orderBy.direction} key={i} />
                        );
                    })}
                </ul> */}
      </div>
    </>
  );
}
