import styles from "../../style/style.module.scss";

export default function Pool(props) {
    const element = props.element;
    return (
        <li style={{ backgroundImage: "url('" + element.img + "')" }}>
            {element.invested &&
                <div className={styles.invested}>Pool investie</div>
            }
            <div className={styles.content}>
                <h1>{element.label}</h1>
                <p>INVESTISSEMENT : <b>{element.invest}</b></p>
                <p>Expertisé à : <b>{element.expire}</b></p>
                <div className={styles.diversification}>
                    <p>
                        {element.diversification.location}
                    </p>
                    <p>
                        {element.diversification.detail.map(function (element, i) {
                            return (
                                <span key={i}>{element}</span>
                            );
                        })}
                    </p>
                </div>
                <p>
                    Valeur initial de l’action: <b>{element.initialValue}</b>
                </p>
                <p>
                    Valeur actuel de l’action: <b>{element.currentValue}</b>
                </p>
                <p>
                    Rendement attendu: 10.40% <b>{element.expectedReturn}</b>
                </p>
            </div>
            {/* <i></i> */}
        </li>
    )
}
