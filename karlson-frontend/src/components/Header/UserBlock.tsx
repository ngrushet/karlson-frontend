import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import creditCard from '/public/credit-card.svg';

import ProfileWrapper from "./ProfileWrapper";

export default function UserBlock() {
    return (
        <div className={styles['user-block']}>
            <div className={styles['balance-wrap']}>
                <div className={styles['card-icon']}>
                    <a href="addBalance.html">
                        <Image data-toggle="tooltip" data-placement="bottom" title="Пополнить баланс" src={creditCard} alt="credit-card" />
                    </a>
                </div>
                <div className={styles.balance}>
                    <div className={styles['balance-value']}>
                        <span>0 ₽ / 0 ₽</span>
                    </div>
                    <div className={styles['bonus-value']}>
                        <a href="bonus.html">
                            <span data-toggle="tooltip" data-placement="bottom" title="Бонусная программа">
                                Бонусы:
                                <span className={styles.value}>0 / 0</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <ProfileWrapper />
        </div>
    );
} 