import styles from "../../style/style.module.scss";
import { NavLink } from "react-router-dom";
import { formatEuro, formatPercent } from "../../utils/Utils";
import { useTranslation } from "react-i18next";

const PoolCardContent = (props) => {
  const {t} = useTranslation();
  const element = props.element;
  const hasValue = props.hasValue;
  return (
    <div className={styles.content}>
      <h1>{element.label}</h1>
      <p>
        {t("pool.invest")} : <b>{formatEuro(element.investmentValue, t("misc.decimalSeparator"), t("misc.thousandSeparator"))}</b>
      </p>
      <p>
        {t("pool.expertise")} : <b>{formatEuro(element.expertValue, t("misc.decimalSeparator"), t("misc.thousandSeparator"))}</b>
      </p>
      <div className={styles.diversification}>
        <p>{element.diversification.location}</p>
        <p>
          {element.diversification.detail.map(function (element, i) {
            return <span key={i}>{element}</span>;
          })}
        </p>
      </div>
      {hasValue && (
        <div className={styles.diversification}>
          <p>
          {t("pool.initialValue")} : <b>{formatEuro(element.initialShareValue, t("misc.decimalSeparator"), t("misc.thousandSeparator"))}</b>
          </p>
          <p>
          {t("pool.currentValue")} : <b>{formatEuro(element.currentShareValue, t("misc.decimalSeparator"), t("misc.thousandSeparator"))}</b>
          </p>
          <p>
          {t("pool.expectedReturn")} : <b>{formatPercent(element.expectedReturnPerYear, t("misc.decimalSeparator"), t("misc.thousandSeparator"))} {t('pool.perYear')}</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default function PoolCard(props) {
  const element = props.element;
  const hasLink = props.hasLink;
  const hasValue = props.hasValue;
  return (
    <div
      className={styles.pool_card + " fade-in"}
      style={{ backgroundImage: "url('" + element.img + "')" }}
    >
      {element.invested && (
        <span className={styles.invested}>Pool investie</span>
      )}
      {hasLink ? (
        <NavLink to={"/pool/" + element.id}>
          <PoolCardContent {...props} />
        </NavLink>
      ) : (
        <div>
          <PoolCardContent {...props} />
        </div>
      )}
    </div>
  );
}
