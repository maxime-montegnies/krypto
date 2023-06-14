import styles from "../style/style.module.scss";

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
            <select onChange={filterChanged} name={data.name} defaultValue={data.value}>
                {data.values.map(function (data_v, i_v) {
                    // const selected = data.value==data_v.value ? "selected" : '';
                    return (
                        <option key={i_v} value={data_v.value}>{data_v.label}</option>
                    )
                })}
            </select>
        </li>
    )
}
export default function Filters(props) {
    const filters = props.filters;
    const setFilters = props.setFilter;
    const filterChanged = (e) => {
        const _filters = JSON.parse(JSON.stringify(filters));
        for (const key in _filters) {
            const element = _filters[key];
            if (element.name == e.name) {
                element.value = e.value;
            }
        }
        props.setFilter((prevVal) => { console.warn("SETfilters"); return _filters });
    }
    return (
        <>
            <div className={styles.filters + " slide-in"}>
                <h1>Filters</h1>
                <ul>
                    {filters.map(function (element, i) {
                        return (
                            <Filter {...props} filterChanged={filterChanged} data={element} key={i} />
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
