import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import logo from '../../public/logo.svg';
import noAvatar from '../../public/noavatar_copy.png';
import creditCard from '../../public/credit-card.svg';
import arrowDown from '../../public/arrow-down.svg'
import profileIcon from '../../public/profile-icon.svg'
import balanceIcon from '../../public/balance-icon.svg'
import staffCouriers from '../../public/staffCouriers.svg'
import profileSettings from '../../public/profile-settings.svg'
import companyIcon from '../../public/company.svg'
import couriersIcon from '../../public/courier-icon.svg'
import documentsIcon from '../../public/documents-icon.svg'
import integration from '../../public/integration.svg'
import referralIcon from '../../public/referral-icon.svg'
import pickPointIcon from '../../public/pick-point-icon.svg'
import verification from '../../public/verification.svg'

export default function Header() {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav></nav>
            <header className={styles.header}>
                <div className={styles.overlay}></div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <Link href="/ordersList"
                            className={`${styles['logo-link']} ${styles['router-link-active']}`}>
                            <Image fill={true} alt="6a" src={logo} />

                        </Link>
                        <div className={styles.navigation}>
                            <ul className={styles['nav-menu']}>
                                <li className={styles['nav-item']}><a>Создать заказ</a></li>
                                <li className={styles['nav-item']}><a href="ordersList.html">Мои заказы</a></li>
                                <li className={styles['nav-item']}><a href="addressBook.html">Мои адреса</a></li>
                                {/* делать такой класс при активном выделении 
                < className={styles['router-link-exact-active'] aria-current="page}>Мои адреса</a></li> */}
                                <li className={styles['nav-item']}><a href="tariffs.html">Тарифы</a></li>
                            </ul>
                            <div className={styles['user-block']}>
                                <div className={styles['balance-wrap']}>
                                    <div className={styles['card-icon']}>
                                        <a href="addBalance.html">
                                            <Image fill={true} data-toggle="tooltip" data-placement="bottom" title="Пополнить баланс" src={creditCard} alt="credit-card" />
                                        </a>
                                    </div>
                                    <div className={styles.balance}>
                                        <div className={styles['balance-value']}>
                                            <span>0 ₽ / 0 ₽</span></div>
                                        <div className={styles['bonus-value']}>
                                            <a href="bonus.html">
                                                <span data-toggle="tooltip" data-placement="bottom" title="Бонусная программа"> Бонусы: <span className={styles.value}>0 / 0</span></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['profile-wrap']}>
                                    <div className={styles.avatar}>
                                        <Image fill={true} src={noAvatar} alt="avatar" className={styles['avatar-image']} />
                                        <Image fill={true} src={arrowDown} alt="arrow-down" />
                                    </div>
                                    <div className={styles['user-dropdown']}>
                                        <div className={styles['user-data']}>
                                            <Image fill={true} src={noAvatar} alt="avatar" className={styles['avatar-image']} />
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
                                                <li className={styles['menu-item']}><a href="profile.html">
                                                    <Image
                                                        fill={true}
                                                        src={profileIcon}
                                                        alt="Профиль" />
                                                    <span>Профиль</span></a></li>
                                                <li className={styles['menu-item']}><a href="addBalance.html">
                                                    <Image
                                                        fill={true}
                                                        src={balanceIcon}
                                                        alt="Баланс" />
                                                    <span>Баланс</span></a></li>
                                                <li className={styles['menu-item']}><a href="staffCouriers.html">
                                                    <Image
                                                        fill={true}
                                                        src={staffCouriers}
                                                        alt="Работа напрямую" />
                                                    <span>Работа напрямую</span></a></li>
                                                <li className={styles['menu-item']}><a href="profileSettings.html">
                                                    <Image
                                                        fill={true}
                                                        src={profileSettings}
                                                        alt="Настройки" />
                                                    <span>Настройки</span></a></li>
                                                <li className={styles['menu-item']}><a href="companyDetails.html">
                                                    <Image
                                                        fill={true}
                                                        src={companyIcon}
                                                        alt="Реквизиты компании" />
                                                    <span>Реквизиты компании</span></a></li>
                                                <li className={styles['menu-item']}><a href="favoriteCouriers.html">
                                                    <Image
                                                        fill={true}
                                                        src={couriersIcon}
                                                        alt="Список курьеров" />
                                                    <span>Список курьеров</span></a></li>
                                                <li className={styles['menu-item']}><a href="documents.html"> <Image fill={true} src={documentsIcon} alt="Документы" /> <span>Документы</span></a></li>
                                                <li className={styles['menu-item']}><a href="integration.html"> <Image fill={true} src={integration} alt="Интеграция" /> <span>Интеграция</span></a></li>
                                                <li className={styles['menu-item']}><a href="refProg.html"> <Image fill={true} src={referralIcon} alt="Реферальная программа" /> <span>Реферальная программа</span></a></li>
                                                <li className={styles['menu-item']}><a href="pickupCenters.html"> <Image fill={true} src={pickPointIcon} alt="Пункты выдачи" /> <span>Пункты выдачи</span></a></li>
                                                <li className={styles['menu-item']}><a href="verification.html"> <Image fill={true} src={verification} alt="Верификация" /> <span>Верификация</span></a></li>
                                            </ul>
                                            <hr className={styles.line}></hr>
                                            <ul className={styles['navigation-wrap']}>
                                                <li className={styles['menu-item']}><a href="/logout"><Image fill={true} src="/public/exit-icon.svg" alt="Выход из профиля" />
                                                    <span>Выход из профиля</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className={styles['mobile-menu-button']}><Image fill={true} src="/public/menu.png" alt="menu" /></button>
                    </div>
                </div>
            </header>
        </section>
    );
}