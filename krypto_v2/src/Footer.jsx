import styles from './style/style.module.scss';

import { useRef, useEffect, useState } from 'react'
import useApp from './store/useApp';

export default function Footer({ }) {
    return <>
        <div className={styles.footer}>
            <h1>footer</h1>
        </div>
    </>
}