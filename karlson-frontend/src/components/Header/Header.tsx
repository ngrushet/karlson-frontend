import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import logo from '/public/logo.svg';
import mobileMenu from '/public/menu.png'
import NavMenu from './NavMenu';
import UserBlock from './UserBlock';

export default function Header() {
    return (
        <div className={styles.mainHeader}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link href="/orders/new"
                        className={styles['logo-link']}>
                        <Image alt="6a" src={logo} />
                    </Link>
                    <div className={styles.navigation}>
                        <NavMenu />
                        <UserBlock />
                    </div>
                    <button type="button" className={styles['mobile-menu-button']}><Image src={mobileMenu} alt="menu" /></button>
                </div>
            </div>
        </div>
    );
}