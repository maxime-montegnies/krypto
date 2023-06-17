import styles from "../../style/style.module.scss";
import { NavLink } from "react-router-dom";

import { formatDate, formatEuro, formatPercent } from "../../utils/Utils";

import { Trans, useTranslation } from "react-i18next";
import PoolCard from "./PoolCard";
import { useContext } from "react";
import LocaleContext from "../../LocaleContext";



export default function PoolCardDetails(props) {
    const pool = props.pool;
    const hasLink = props.hasLink;
    const hasValue = props.hasValue;
    const { locale } = useContext(LocaleContext);
    const { t } = useTranslation();
    // if (pool.isLoading) return (
    //     <div className={styles.section_frame__top + " " + styles.pool_detail_frame} >
    //         <div className={styles.pool_detail_frame_pool}>
    //             <div className={styles.pool_detail_frame_pool_card}>
    //                 <div className={styles.pool_detail_frame_pool_loader}></div>
    //                 <div className={styles.pool_detail_frame_pool_card_footer}>
    //                     <ul>
    //                         <li>
    //                             <p>&nbsp;</p>
    //                             <span></span>
    //                         </li>
    //                         <li>
    //                             <p>&nbsp;</p>
    //                             <span></span>
    //                         </li>
    //                         <li>
    //                             <p>&nbsp;</p>
    //                             <span></span>
    //                         </li>
    //                         <li>
    //                             <p>&nbsp;</p>
    //                             <span></span>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    // );
    return (
        <div className={styles.section_frame__top + " " + styles.pool_detail_frame} >
            <div className={styles.pool_detail_frame_pool}>
                <div className={styles.pool_detail_frame_pool_card}>
                    {pool.isLoading ? (
                        <>
                            <div className={styles.pool_detail_frame_pool_loader}></div>
                            <div className={styles.pool_detail_frame_pool_card_footer}>
                                <ul>
                                    <li>
                                        <p>&nbsp;</p>
                                        <span></span>
                                    </li>
                                    <li>
                                        <p>&nbsp;</p>
                                        <span></span>
                                    </li>
                                    <li>
                                        <p>&nbsp;</p>
                                        <span></span>
                                    </li>
                                    <li>
                                        <p>&nbsp;</p>
                                        <span></span>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <PoolCard element={pool.data} />
                            <div className={styles.pool_detail_frame_pool_card_footer}>
                                <ul>
                                    <li>
                                        <p><Trans t={t}>pool.creationDate</Trans></p>
                                        <span>{formatDate(pool.data.creationDate, locale)}</span>
                                    </li>
                                    <li>
                                        <p><Trans t={t}>pool.numberOfNFTs</Trans></p>
                                        <span>{pool.data.numberOfNFTs}</span>
                                    </li>
                                    <li>
                                        <p><Trans t={t}>pool.initialShareValue</Trans></p>
                                        <span>{formatEuro(pool.data.initialShareValue)}</span>
                                    </li>
                                    <li>
                                        <p><Trans t={t}>pool.currentShareValue</Trans></p>
                                        <span>
                                            <b>{formatEuro(pool.data.currentShareValue)}</b>
                                        </span>
                                    </li>
                                    <li className={styles.fullWidth}>
                                        <p><Trans t={t}>pool.movementOver12Months</Trans></p>
                                        <span>{pool.data.movementOver12Months}</span>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.pool_detail_extra}>
                <div className={styles.pool_detail_info}>
                    <h1><Trans t={t}>pool.info</Trans></h1>
                    {pool.isLoading ? (
                        <>
                            <ul style={{ opacity: 0.5 }}>
                                <li>
                                    <p><Trans t={t}>pool.investmentValue</Trans></p>
                                    <span></span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.expertValue</Trans></p>
                                    <span></span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.theoreticalCapitalGain</Trans></p>
                                    <span></span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.amountOfCurrentRents</Trans></p>
                                    <span></span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.amountOfPotentialRents</Trans></p>
                                    <span></span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.returnPerYear</Trans></p>
                                    <span></span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.potentialReturnPerYear</Trans></p>
                                    <span></span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.treasury</Trans></p>
                                    <span></span>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <ul>
                                <li>
                                    <p><Trans t={t}>pool.investmentValue</Trans></p>
                                    <span>
                                        <b>{formatEuro(pool.data.investmentValue, t("misc.decimalSeparator"), t("misc.thousandSeparator"))}</b>
                                    </span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.expertValue</Trans></p>
                                    <span>
                                        <b>{formatEuro(pool.data.expertValue, t("misc.decimalSeparator"), t("misc.thousandSeparator"))}</b>
                                    </span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.theoreticalCapitalGain</Trans></p>
                                    <span>
                                        {formatEuro(pool.data.expertValue - pool.data.investmentValue, t("misc.decimalSeparator"), t("misc.thousandSeparator"))}
                                    </span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.amountOfCurrentRents</Trans></p>
                                    <span>
                                        <span>{formatEuro(pool.data.amountOfCurrentRents, t("misc.decimalSeparator"), t("misc.thousandSeparator"))}</span>
                                    </span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.amountOfPotentialRents</Trans></p>
                                    <span>{formatEuro(pool.data.amountOfPotentialRents, t("misc.decimalSeparator"), t("misc.thousandSeparator"))}</span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.returnPerYear</Trans></p>
                                    <span>
                                        {formatPercent(pool.data.returnPerYear, t("misc.decimalSeparator"), t("misc.thousandSeparator"))}
                                    </span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.potentialReturnPerYear</Trans></p>
                                    <span>
                                        {formatPercent((pool.data.amountOfPotentialRents - pool.data.amountOfCurrentRents) / pool.data.amountOfCurrentRents, t("misc.decimalSeparator"), t("misc.thousandSeparator"))}
                                    </span>
                                </li>
                                <li>
                                    <p><Trans t={t}>pool.treasury</Trans></p>
                                    <span>{formatEuro(pool.data.treasury, t("misc.decimalSeparator"), t("misc.thousandSeparator"))}</span>
                                </li>
                            </ul>
                        </>
                    )}
                </div>
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
                                <ul>
                                    {pool.data.sites.map(function (element, i) {
                                        return <li key={i}>
                                            <figure style={{ backgroundImage: 'url(' + element.img + ')' }}></figure>
                                            <h2>{element.title}</h2>
                                        </li>;
                                    })}
                                </ul>
                            </div>
                        </>
                    )}




                </div>
            </div>
            {/* <PoolCard element={pool.data} /> */}
        </div>
    );
}
