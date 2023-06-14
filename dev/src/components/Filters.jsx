// import { useEffect, useRef, useState } from "react";
// import styles from "../style/style.module.scss";
// import { useTranslation } from "react-i18next";
// import useFetchData from "../utils/useFetchData";

import { useEffect, useState } from "react";

function Filter(props) {
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
            <span>{data.label} : </span>
            <select onChange={filterChanged} name={data.name}>
                {data.values.map(function (data_v, i_v) {
                    // const selected = data.value==data_v.value ? "selected" : '';
                    return (
                        <option selected={data.value==data_v.value} key={i_v} value={data_v.value}>{data_v.label}</option>
                    )
                })}
            </select>
        </li>
    )
}
export default function Filters(props) {
    console.log('render filter')
    const [filters, setFilters] = useState([
        {
            name: "gender",
            label: "Gender",
            value: "",
            values: [
                {
                    "label": "All",
                    "value": ""
                },
                {
                    "label": "Male",
                    "value": "male"
                }
                ,
                {
                    "label": "Female",
                    "value": "female"
                }
            ]
        }
        ,
        {
            name: "results",
            label: "Results",
            value: "10",
            values: [
                {
                    "label": "5",
                    "value": "5"
                },
                {
                    "label": "10",
                    "value": "10"
                },
                {
                    "label": "20",
                    "value": "20"
                }
                ,
                {
                    "label": "50",
                    "value": "50"
                }
                ,
                {
                    "label": "100",
                    "value": "100"
                }
                ,
                {
                    "label": "150",
                    "value": "150"
                }
                ,
                {
                    "label": "200",
                    "value": "200"
                }
            ]
        }

    ])


    const filterChanged = (e) => {
        // console.warn('filterChanged', e)
        const _filters = filters;
        for (const key in _filters) {
            const element = _filters[key];
            if (element.name == e.name) {
                element.value = e.value;
            }
        }
        setFilters(_filters);
        // const retObj = [];
        // for (const key in filters) {
        //     const element = filters[key];
        //     retObj.push({"name":element.name, "value":element.value[0] })
        // }
        const retObj = {"name":e.name, "value":e.value};
        props.filterChanged(retObj);
    }

    return (
        <>
            <h1>Filters</h1>
            <ul>
                {filters.map(function (element, i) {
                    return (
                        <Filter {...props} filterChanged={filterChanged} data={element} key={i} />
                    );
                })}
            </ul>
        </>
    );
}
