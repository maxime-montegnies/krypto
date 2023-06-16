import styles from "../../style/style.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function FilterUnit(props) {
    const data = props.data;
    const filterChanged = (e) => {
        const retObj = {};
        retObj.name = e.target.name;
        retObj.value = e.target.value;
        // data.value[1](e.target.value);
        props.filterChanged(retObj);
    }
    return (
        <li >
            <label>
            <span>{data.label}</span>
            <select onChange={filterChanged} name={data.name} defaultValue={data.value}>
                {data.values.map(function (data_v, i_v) {
                    // const selected = data.value==data_v.value ? "selected" : '';
                    return (
                        <option key={i_v} value={data_v.value}>{data_v.label}</option>
                    )
                })}
            </select>
            </label>
        </li>
    )
}
export default function Filter(props) {
    const [label, setLabel] = useState("");
    const {t} = useTranslation();
    const filters = props.filters;
    const setFilter = props.setFilter;
    const filterChanged = (e) => {
        const _filters = JSON.parse(JSON.stringify(filters));
        let params = [];
        for (const key in _filters.filterBy) {
            const element = _filters.filterBy[key];
            if (element.name == e.name) {
                element.value = e.value;
            }
            if(element.value!==""&& element.showInUi==true) params.push(element.value);
        }
        if(params.length!=0){
            setLabel(`(${params.join(',')})`);
        } else {
            setLabel(``);
        }
        setFilter((prevVal) => { console.warn("SETfilters"); return _filters });
    }
    return (
        <>
            <div className={styles.filter}>
            <h1>{t("misc.filters")} <small>{label}</small></h1>
                <ul>
                    {filters.filterBy.map(function (element, i) {
                        return (
                            <FilterUnit {...props} filterChanged={filterChanged} data={element} key={i} />
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
