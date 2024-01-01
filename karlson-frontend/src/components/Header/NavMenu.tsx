import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function NavMenu() {
    return (
        <ul className={styles['nav-menu']}>
            <li className={styles['nav-item']}><a href="/orders/new">Создать заказ</a></li>
            <li className={styles['nav-item']}><a href="/orders">Мои заказы</a></li>
            <li className={styles['nav-item']}><a href="/adresses">Мои адреса</a></li>
            {/* делать такой класс при активном выделении 
                < className={styles['router-link-exact-active'] aria-current="page}>Мои адреса</a></li> */}
            <li className={styles['nav-item']}><a href="tariffs.html">Тарифы</a></li>
        </ul>
    );
}