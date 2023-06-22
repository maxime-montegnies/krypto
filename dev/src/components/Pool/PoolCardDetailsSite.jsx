import styles from "../../style/style.module.scss";
import { NavLink } from "react-router-dom";

import { formatDate, formatEuro, formatSurface } from "../../utils/Utils";

import { Trans, useTranslation } from "react-i18next";
import PoolCard from "./PoolCard";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import LocaleContext from "../../LocaleContext";



export default function PoolCardDetailsSite(props) {
    const [incSite, setIncSite] = useState(0)
    const [incMax, setIncMax] = useState(0)
    const pool = props.pool;
    const { locale } = useContext(LocaleContext);

    const btPrev = useRef();
    const btNext = useRef();
    const container = useRef();
    const { t } = useTranslation();


    const onBtPrevClick = () => {
        setIncSite((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    }
    const onBtNextClick = () => {
        setIncSite((prevCount) => {
            return (prevCount < incMax ? prevCount + 1 : prevCount);
        });
    }
    useEffect(() => {
        if (pool.isLoading == false)
            setIncMax(container.current.childElementCount - 1);
    }, [pool.isLoading]);
    return (
        <div className={styles.pool_detail_sites}>
            <h1>
                <Trans t={t}>pool.sites</Trans>
            </h1>
            {pool.isLoading ? (
                <>
                    <h1>Loading</h1>
                </>
            ) : (
                <>
                    <div className={styles.pool_detail_sites_content}>
                        <div className={styles.pool_detail_sites_content_inner}>
                            <ul ref={container} style={{ "transform": `translateX(calc((-100% - 20px) * ${incSite}))` }}>
                                {pool.data.sites.map(function (element, i) {
                                    return <li key={i}>
                                        <figure style={{ backgroundImage: 'url(' + element.img + ')' }}></figure>
                                        <div>
                                            <div>
                                                <h2>{i+1}. {element.title}</h2>
                                                <div className={styles.location}>{element.location}</div>
                                            </div>
                                            <div>
                                                <span>{t('pool.investmentCost')} :</span>
                                                <span>{formatEuro(element.investCost)}</span>
                                            </div>
                                            <div>
                                                <span>{t('pool.area')} :</span>
                                                <span>{formatSurface(element.area)}</span>
                                            </div>
                                            <div>
                                                <span>{t('pool.areaCost')} :</span>
                                                <span>{formatEuro(Math.round(element.investCost / (element.area * parseFloat(t('misc.surfaceMultiplyer'))) * 10) / 10)}</span>
                                            </div>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <nav>
                            <button ref={btPrev} onClick={onBtPrevClick} className={(incSite==0?styles.disable:"") + " " + styles.previous }>{t('misc.previous')}</button>
                            <span>{t('pool.consultBuildings') + ' (' + (incSite + 1) + '/' + (incMax + 1) + ')'}</span>
                            <button ref={btNext} onClick={onBtNextClick} className={(incSite==incMax?styles.disable:"")+ " " + styles.next  }>{t('misc.next')}</button>
                        </nav>
                    </div>
                </>
            )}
        </div>
    );
}
