import Image from "next/image";
import logo from '/public/logo.svg';
import styles from './Footer.module.css';
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles["footer"]}>
            <div className={styles["full_container"]}>
                <div className={styles["footer_content_uppart"]}>
                    <div className={styles["main__container"]}>
                        <div className={styles["footer_uppart"]}>
                            <div className={styles["footer_uppart-leftpart"]}>
                                <Link href="#">
                                    <Image src={logo} alt="" />
                                </Link>
                            </div>
                            <div className={styles["footer_uppart-rightpart"]}>
                                <div className={styles["footer_uppart-rightpart-menu"]}>
                                    <nav className={styles["footer_uppart-rightpart-navmenu"]}>
                                        <ul className={styles["footer_uppart-rightpart-navmenu-list"]}>
                                            <li className={styles["footer_uppart-rightpart-navmenu-list-item"]}>
                                                <Link href="">Контакты</Link>
                                            </li>
                                            <li className={styles["footer_uppart-rightpart-navmenu-list-item"]}>
                                                <Link href="">FAQ для заказчиков</Link>
                                            </li>
                                            <li className={styles["footer_uppart-rightpart-navmenu-list-item"]}>
                                                <Link href="">Юрлицам</Link>
                                            </li>
                                            <li className={styles["footer_uppart-rightpart-navmenu-list-item"]}>
                                                <Link href="">Регламент возмещения</Link>
                                            </li>
                                            {/* <li className={styles["footer_uppart-rightpart-navmenu-list-item"]}>
                                                <Link href="">Партнерская программа</Link>
                                            </li> */}
                                            <li className={styles["footer_uppart-rightpart-navmenu-list-item"]}>
                                                <Link href="">Информация</Link>
                                            </li>
                                            <li
                                                className={styles["footer_uppart-rightpart-navmenu-list-item footer_uppart-rightpart-navmenu-list-item-callbutton"]}>
                                                <Link href="">Обратная связь</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["full_container"]}>
                <div className={styles["footer_content_centrepart"]}>
                    <div className={styles["main__container"]}>
                        <div className={styles["footer_content_centrepart-content"]}>
                            <div className={styles["footer_content_centrepart-content-leftparts"]}>
                                <div className={styles["footer_content_centrepart-content-leftparts-menu"]}>
                                    <div className={styles["footer_content_centrepart-content-leftparts-menu-item"]}>
                                        <p>ООО «Карлсон»</p>
                                    </div>
                                    <div className={styles["footer_content_centrepart-content-leftparts-menu-item"]}>
                                        <p><b>Москва:</b> +7 (495) 120-17-28</p>
                                    </div>
                                    <div className={styles["footer_content_centrepart-content-leftparts-menu-item"]}>
                                        <p><b>Екатеринбург:</b> +7 (343) 243-58-79</p>
                                    </div>
                                    <div className={styles["footer_content_centrepart-content-leftparts-menu-item"]}>
                                        <p><b>ИНН</b> 7814737269</p>
                                    </div>
                                    <div className={styles["footer_content_centrepart-content-leftparts-menu-item"]}>
                                        <p><b>Петербург:</b> +7 (812) 748-26-37</p>
                                    </div>
                                    <div className={styles["footer_content_centrepart-content-leftparts-menu-item"]}>
                                        <p><b>Казань:</b> +7 (843) 216-06-31</p>
                                    </div>
                                    <div className={styles["footer_content_centrepart-content-leftparts-menu-item"]}>
                                        <p><b>ОГРН</b> 1187847221650</p>
                                    </div>
                                    <div className={styles["footer_content_centrepart-content-leftparts-menu-item"]}>
                                        <p><b>Краснодар:</b> +7 (861) 205-04-93</p>
                                    </div>
                                    <div className={styles["footer_content_centrepart-content-leftparts-menu-item"]}>
                                        <p><b>Email:</b> info@karlson.ru</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["footer_content_centrepart-content-rightparts"]}>
                                <div className={styles["footer_content_centrepart-content-rightparts-menu"]}>
                                    {/* <div className={styles["footer_content_centrepart-content-rightparts-menu-item"]}>
                                        <Link href="#"><Image src="../images/app-store.svg" alt=""/></Link>
                                    </div>
                                    <div className={styles["footer_content_centrepart-content-rightparts-menu-item"]}>
                                        <Link href="#"><Image src="../images/google-play.svg" alt=""/></Link>
                                    </div>
                                    <div className={styles["footer_content_centrepart-content-rightparts-menu-item"]}>
                                        <Link href="#"><Image src="../images/appgallery.svg" alt=""/></Link>
                                    </div>
                                    <div
                                        className={styles["footer_content_centrepart-content-rightparts-menu-item footer_content_centrepart-content-rightparts-menu-item-VK"]}>
                                        <Link href="#"><Image src="../images/VK.svg" alt=""/></Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["full_container"]}>
                <div className={styles["footer_content_downpart"]}>
                    <div className={styles["main__container"]}>
                        <div className={styles["footer_content_downpart-content"]}>
                            <div className={styles["footer_content_downpart-content-leftpart"]}>
                                <p>© 2023 Сервис вызова курьера и пункты выдачи «Карлсон»</p>
                                <p>Современная система краудсорсинговой доставки для интернет-магазинов и частных
                                    лиц</p>
                            </div>
                            <div className={styles["footer_content_downpart-content-leftpart-rightpart"]}>
                                <Link href="#">Политика конфедициальности</Link>
                                <Link href="#">Пользовательское соглашение</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};