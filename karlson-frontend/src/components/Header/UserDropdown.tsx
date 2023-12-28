import React from 'react';

import Image from 'next/image';
import styles from './UserDropdown.module.css';

import noAvatar from '/public/noavatar_copy.png';
import profileIcon from '/public/profile-icon.svg'
import balanceIcon from '/public/balance-icon.svg'
import staffCouriers from '/public/staffCouriers.svg'
import profileSettings from '/public/profile-settings.svg'
import companyIcon from '/public/company.svg'
import couriersIcon from '/public/courier-icon.svg'
import documentsIcon from '/public/documents-icon.svg'
import integration from '/public/integration.svg'
import referralIcon from '/public/referral-icon.svg'
import pickPointIcon from '/public/pick-point-icon.svg'
import verification from '/public/verification.svg'
import exitIcon from '/public/exit-icon.svg'

interface UserDropdownProps {
    isDropdownOpen: boolean;
}
const UserDropdown: React.FC<UserDropdownProps> = ({ isDropdownOpen }) => {
    return (
        <div className={styles['user-dropdown']} style={{ display: isDropdownOpen ? 'block' : 'none' }}>
            <div className={styles['user-data']}>
                <Image src={noAvatar} alt="avatar" className={styles['avatar-image']} />
                <div className={styles.data}>
                    <h4 className={styles.name}>Сергей</h4>
                    <small>Заказчик (Москва)</small>
                </div>
            </div>
            <div className={styles['balance-data']}>
                <div className={styles['b-data']}>
                    <h4>Баланс:</h4>

                    <span>0 ₽ / 0 ₽</span>
                </div>
                <div className={styles['b-data']}>
                    <h4>Бонусы:</h4>
                    <span className={styles.red}>0 / 0</span>
                </div>
                <div className={styles['b-data']}>
                    <h4>Доставки:</h4>
                    <span>0 за ноябрь / 0 за октябрь</span>
                </div>
            </div>
            <hr className={styles.line}></hr>
            <div>
                <ul className={styles['navigation-wrap']}>
                    <li className={styles['menu-item']}>
                        <a href="profile.html">
                            <Image
                                src={profileIcon}
                                alt="Профиль" />
                            <span>Профиль</span>
                        </a>
                    </li>
                    <li className={styles['menu-item']}>
                        <a href="addBalance.html">
                            <Image
                                src={balanceIcon}
                                alt="Баланс" />
                            <span>Баланс</span>
                        </a>
                    </li>
                    {/* <li className={styles['menu-item']}>
                        <a href="staffCouriers.html">
                            <Image
                                src={staffCouriers}
                                alt="Работа напрямую" />
                            <span>Работа напрямую</span>
                        </a>
                    </li> */}
                    <li className={styles['menu-item']}>
                        <a href="profileSettings.html">
                            <Image
                                src={profileSettings}
                                alt="Настройки" />
                            <span>Настройки</span>
                        </a>
                    </li>
                    <li className={styles['menu-item']}>
                        <a href="companyDetails.html">
                            <Image
                                src={companyIcon}
                                alt="Реквизиты компании" />
                            <span>Реквизиты компании</span>
                        </a>
                    </li>
                    {/* <li className={styles['menu-item']}>
                        <a href="favoriteCouriers.html">
                            <Image
                                src={couriersIcon}
                                alt="Список курьеров" />
                            <span>Список курьеров</span>
                        </a>
                    </li> */}
                    {/* <li className={styles['menu-item']}>
                        <a href="documents.html">
                            <Image src={documentsIcon} alt="Документы" />
                            <span>Документы</span>
                        </a>
                    </li> */}
                    {/* <li className={styles['menu-item']}>
                        <a href="integration.html">
                            <Image src={integration} alt="Интеграция" />
                            <span>Интеграция</span>
                        </a>
                    </li> */}
                    {/* <li className={styles['menu-item']}>
                        <a href="refProg.html">
                            <Image src={referralIcon} alt="Реферальная программа" />
                            <span>Реферальная программа</span>
                        </a>
                    </li> */}
                    {/* <li className={styles['menu-item']}>
                        <a href="pickupCenters.html">
                            <Image src={pickPointIcon} alt="Пункты выдачи" />
                            <span>Пункты выдачи</span>
                        </a>
                    </li> */}
                    {/* <li className={styles['menu-item']}>
                        <a href="verification.html">
                            <Image src={verification} alt="Верификация" />
                            <span>Верификация</span>
                        </a>
                    </li> */}
                </ul>
                <hr className={styles.line}></hr>
                <ul className={styles['navigation-wrap']}>
                    <li className={styles['menu-item']}>
                        <a href="/logout">
                            <Image src={exitIcon} alt="Выход из профиля" />
                            <span>Выход из профиля</span>
                        </a>
                    </li>
                </ul>
            </div>
        </ div >
    );
};

export default UserDropdown;