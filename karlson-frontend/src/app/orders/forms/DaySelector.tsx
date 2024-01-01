import styles from './DaySelector.module.css';

export default function DaySelector() {
    const options = [
        '1 сентября',
        '2 сентября',
        '3 сентября',
        '4 сентября',
        '5 сентября',
        '6 сентября',
        '7 сентября',
        '8 сентября',
        '9 сентября',
        '10 сентября',
    ];

    return (
        <div className={`${styles['orderdelivery-content-leftpart-sender-options-selectblock']} ${styles.slctdateoutblock}`}>
            <label className={styles.selectout} htmlFor="slct">
                <select id="slctdateout" required={true} className={styles['slctdateoutclass']}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <svg>
                    <use xlinkHref="#select-arrow-down"></use>
                </svg>
            </label>
            <svg className={styles.sprites}>
                <symbol id="select-arrow-down" viewBox="0 0 10 6">
                    <polyline points="1 1 5 5 9 1"></polyline>
                </symbol>
            </svg>
        </div>
    );
}