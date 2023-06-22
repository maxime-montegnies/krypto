import { useEffect, useRef } from "react";
import styles from "../../style/style.module.scss";
import Filter from "./Filter";
import Sort from "./Sort";
import useApp from "../../store/useApp";
import Layout from "./Layout";

export default function Filters(props) {
    const setSavedFilters = useApp((state) => state.setSavedFilters);
    const addParams = (obj) => {
        let params = ""
        obj.filterBy && obj.filterBy.forEach(element => {
            params += `&${element.name}=${element.value}`
        });
        if (obj.orderBy && obj.orderBy.direction !== "") {
            params += `&order-${obj.orderBy.value}=${obj.orderBy.direction}`;
        }
        obj.url = obj.service + params.replace(params[0], '?');
    }
    const contentRef = useRef();
    const setFilter = (v) => {
        setSavedFilters(v())
        addParams(v())
        return props.setFilter(v);
    }
    useEffect(()=>{
        document.documentElement.style.setProperty('--max-height-filters', `${contentRef.current.offsetHeight+30}px`)
    }, []);

    return (
        <div className={styles.filters + " slide-in"}>
            <input type="checkbox" className={styles.filtersOpener}></input>
            <div>
            <div ref={contentRef}>
            {props.filters.filterBy &&
                <Filter setFilter={setFilter} filters={props.filters} />
            }
            {props.filters.orderBy &&
                <Sort setFilter={setFilter} filters={props.filters} />
            }
            {props.filters.layout &&
                <Layout setFilter={setFilter} filters={props.filters} />
            }
            </div>
            </div>
        </div>
    );
}
