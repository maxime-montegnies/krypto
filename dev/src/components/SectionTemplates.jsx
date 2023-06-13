import styles from "../style/style.module.scss";

export function SectionTitle(props) {
    const subtitle = props.subtitle;
    const title = props.title;
    const text = props.text;
    
  return (
    <div className={styles.section_header + " slide-in"}>
        <h3>{subtitle}</h3>
        <header>
          <div>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </header>
      </div>

  );
}
