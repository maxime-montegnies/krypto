import styles from "../../style/style.module.scss";
import Filter from "./Filter";
import Sort from "./Sort";

export default function Filters(props) {
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
    const setFilter = (v) => {
        addParams(v())
        return props.setFilter(v);
    }

    return (
        <div className={styles.filters + " slide-in"}>
            <input type="checkbox" className={styles.filtersOpener}></input>
            {props.filters.filterBy &&
                <Filter setFilter={setFilter} filters={props.filters} />
            }
            {props.filters.orderBy &&
                <Sort setFilter={setFilter} filters={props.filters} />
            }
        </div>
    );
}
