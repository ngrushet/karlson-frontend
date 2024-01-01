import React from "react";
import styles from "./TimeSelector.module.css";

interface TimeSelectorProps {
    times: string[];
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ times }) => {
    return (
        <div className={styles["orderdelivery-content-leftpart-sender-options-selectblock slcttimeoutblock"]}>
            <div className={styles["slcttimeoutblock-container"]}>
                <div className={styles["slcttimeoutblock-mera"]}>
                    c
                </div>
                <label className={styles.selectout} htmlFor="slct">
                    <select id="slcttimeout" required={true}>
                        {times.map((time, index) => (
                            <SelectOption key={index} value={time} label={time} />
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
        </div>
    );
};

interface SelectOptionProps {
    value: string;
    label: string;
}

const SelectOption: React.FC<SelectOptionProps> = ({ value, label }) => {
    return (
        <option value={value}>
            {label}
        </option>
    );
};

export default TimeSelector;