import styles from "../../style/style.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function SortUnit(props) {
    const {t} = useTranslation();
    const data = props.data;
    const value = props.value;
    const direction = props.direction;
    const currentValue = value==data.value?direction:'';
    const filterChanged = (e) => {
        const retObj = {};
        retObj.name = e.target.name;
        retObj.value = e.target.value;
        props.filterChanged(retObj);
    }
    const filterClicked = (e) => {
        const retObj = {};
        const dataValue = e.target.dataset.value;
        const dataName = e.target.dataset.name;
        // const value = dataValue==""?"1":dataValue=="1"?"-1":"";
        const value = dataValue==""?"1":dataValue=="1"?"-1":"1";
        retObj.name = dataName;
        retObj.value = value;
        props.filterChanged(retObj);
    }
    // const className = styles.right;
    return (
        <li >

            {/* 
            <span>{data.label} : </span>
            <select onChange={filterChanged} name={data.value} value={currentValue}>
                <option value="" disabled>Noop</option>
                <option value="1">ASC</option>
                <option value="-1">DESC</option>
            </select>
             */}
             
             <button  onClick={filterClicked} data-name={data.value} data-value={currentValue} className={styles.filters_sort + " " + (currentValue=="-1"?styles.down:currentValue=="1"?styles.up:"") + " " +currentValue} >{t("pool."+data.value)}</button>
        </li>
    )
}
export default function Sort(props) {
// const filters = props.filters;
    const [label, setLabel] = useState("");
    const {t} = useTranslation();
    console.log("RENDER SORTS RENDER SORTSRENDER SORTS ", props.filters.orderBy.value)
    const setFilter = props.setFilter;
    const filterChanged = (e) => {
        const _filters = JSON.parse(JSON.stringify(props.filters));
        _filters.orderBy.value = e.name;
        _filters.orderBy.direction = e.value;
        setLabel(`(${_filters.orderBy.value})`);
        setFilter((prevVal) => { console.warn("SETfilters", _filters); return _filters });
    }
    return (
        <>
            <div className={styles.filter + " " + styles.sort}>
                <h1>{t("misc.sort")} <small>{label}</small></h1>
                <ul>
                    {props.filters.orderBy.values.map(function (element, i) {
                        return (
                            <SortUnit {...props} filterChanged={filterChanged} data={element} value={props.filters.orderBy.value} direction={props.filters.orderBy.direction} key={i} />
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
