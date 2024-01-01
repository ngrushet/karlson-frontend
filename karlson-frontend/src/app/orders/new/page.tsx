import Image from 'next/image';
import styles from './Orders.module.css';
import TimeSelector from '../forms/TimeSelector';
import selectArrowDown from '/public/arrow-down.svg';
import qrCode from '/public/qr.svg';
import chatRightmenu from '/public/chat_rightmenu.png'
import telegramRightMenu from '/public/telegram_rightmenu.png'
import house from '/public/house.svg'
import bocal from '/public/bocal.svg'
import boxes from '/public/boxes.svg'
import present from '/public/present.svg'
import docs from '/public/docs.svg'
import all from '/public/all.svg'
import info from '/public/info.svg'
import mapGeo from '/public/map_geo.svg'
import OrderCreateForm from './OrderCreateForm';
import React, {useContext, useState} from 'react';

async function createOrder(data: FormData) {

}

export default function Orders() {
    const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

    const {user} = useContext(Context)
    // const location 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <OrderCreateForm />
        </div>
    )

    // return (
    //     <div className={styles["orderdelivery"]}>
    //         <div className={styles["full_container"]}>
    //             <div className={styles['fixedrightmenu fixedrightmenu-orderdelivery']}>
    //                 <div className={styles['fixedrightmenu-qr']}>
    //                     <p>Если на вашем компьютере не<br /> установлена программа Telegram,<br /> вы можете открыть ее на другом<br /> устройстве, для этого<br /> отсканируйте QR-Код</p>
    //                     <Image src={qrCode} alt="" />
    //                     <div className={styles['blur blur-tracktheorderone']}></div>
    //                 </div>
    //                 <div className={styles['fixedrightmenu-messangers']}>
    //                     <a href="#">
    //                         <Image src={chatRightmenu} alt="" />
    //                     </a>
    //                     <a href="#">
    //                         <Image src={telegramRightMenu} alt="" />
    //                     </a>
    //                 </div>
    //             </div>
    //             <div className={styles['main__container']}>
    //                 <div className={styles['orderdelivery-header']}>
    //                     <div className={styles['orderdelivery-header-navlink']}>
    //                         <a href="index.html">Главная </a>
    //                         <p>&nbsp;/&nbsp;</p>
    //                         <a href="tracktheorder.html"> Заказать доставку</a>
    //                     </div>
    //                     <h1 className={styles.upper}>Заказать доставку</h1>
    //                     <form action="">
    //                         <div className={styles['orderdelivery-content']}>
    //                             <div className={styles['orderdelivery-content-leftpart']}>
    //                                 <div className={styles['orderdelivery-content-leftpart-typedelivery']}>
    //                                     <h3>Выберите тип доставки</h3>
    //                                     <div className={styles['orderdelivery-form-radiobuttons']}>
    //                                         <div className={styles['orderdelivery-form_radio_btn']}>
    //                                             <label htmlFor="oradio-1">Пешком</label>
    //                                             <input id="oradio-1" type="radio" name="radio" value="1" checked={true} />
    //                                         </div>
    //                                         <div className={styles['orderdelivery-form_radio_btn']}>
    //                                             <label htmlFor="oradio-2">Автомобилем</label>
    //                                             <input id="oradio-2" type="radio" name="radio" value="2" />
    //                                         </div>
    //                                         <div className={styles['orderdelivery-form_radio_btn']}>
    //                                             <label htmlFor="oradio-3">Грузовиком</label>
    //                                             <input id="oradio-3" type="radio" name="radio" value="3" />
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <div className={styles['orderdelivery-content-leftpart-sender']}>
    //                                     <h3>Отправитель</h3>
    //                                     <div className={styles['orderdelivery-content-leftpart-sender-header']}>
    //                                         <Image src={house} alt="" />
    //                                         <input type="text" placeholder="Волхонка, д 15" required={true} />

    //                                     </div>
    //                                     <div className={styles['orderdelivery-content-leftpart-sender-options']}>
    //                                         <input type="text" placeholder="+7(___)___-__-__" data-tel-input required={true} />

    //                                             {/* day selector */}
    //                                             <TimeSelector times={times} />
    //                                             <TimeSelector times={times} />
    //                                             {/* <div className={styles["orderdelivery-content-leftpart-sender-options-selectblock slctdeadlineinblock">
    //                                             <div className={styles["slctdeadlineinblock-container">
    //                                                 <div className={styles["slcttimeinblock-mera">
    //                                                     до
    //                                                 </div>
    //                                                 <label className={styles["selectin" htmlFor="slct">
    //                                                     <select id="slctdeadlinein" required={true} className={styles["slctdeadlineinclass">
    //                                                         <option value="" disabled="disabled" selected={true}>Неважно</option>
    //                                                         <option value="#">Не важно</option>
    //                                                         <option value="#">10:00</option>
    //                                                         <option value="#">11:00</option>
    //                                                         <option value="#">12:00</option>
    //                                                         <option value="#">13:00</option>
    //                                                         <option value="#">14:00</option>
    //                                                         <option value="#">15:00</option>
    //                                                         <option value="#">16:00</option>
    //                                                         <option value="#">17:00</option>
    //                                                         <option value="#">18:00</option>
    //                                                     </select>
    //                                                     <svg>
    //                                                         <use xlink:href="#select-arrow-down"></use>
    //                                                     </svg>
    //                                                 </label>
    //                                                 <svg className={styles["sprites">
    //                                                     <symbol id="select-arrow-down" viewbox="0 0 10 6">
    //                                                         <polyline points="1 1 5 5 9 1"></polyline>
    //                                                     </symbol>
    //                                                 </svg>
    //                                             </div>
    //                                         </div> */}
    //                                             <div className={styles["orderdelivery-content-leftpart-recepient-checkbox"]}>
    //                                                 <label htmlFor="checkbox-recepient">Получить наличные за товар</label>
    //                                                 <input type="checkbox" name="" id="checkbox-recepient" />
    //                                             </div>
    //                                             <div className={styles["orderdelivery-content-leftpart-recepient-dopinfo"]}>
    //                                                 <div className={styles["accordion"]}>
    //                                                     <div className={styles["tabin"]}>
    //                                                         <label htmlFor="tab1in" className={styles["tabin-title"]}>Доп. информация</label>
    //                                                         <input type="checkbox" id="tab1in" name="tab-group" />
    //                                                         <div className={styles["tabin-content"]}>
    //                                                             <textarea id="orderdelivery-content-leftpart-recepient-dopinfo-textarea"></textarea>
    //                                                         </div>

    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                     </div>
    //                                     <div className={styles["orderdelivery-content-leftpart-what"]} >
    //                                         <h3 className={styles["orderdelivery-content-leftpart-what-h3"]} > Что везем:</h3>
    //                                         <div className={styles["orderdelivery-content-leftpart-what-header"]} >
    //                                             <div className={styles["orderdelivery-content-leftpart-what-header-round"]} >
    //                                                 №1
    //                                             </div>
    //                                             <input type="text" name="" id="" placeholder="Что везем" required={false} />
    //                                         </div>
    //                                         <div className={styles["orderdelivery-content-leftpart-what-menu"]} >


    //                                             <div className={styles["what-menu_btn"]} >
    //                                                 <input id="what-menu-1" type="radio" name="radio" value="1" checked={true} />
    //                                                 <label htmlFor="what-menu-1">
    //                                                     <div className={styles["orderdelivery-content-leftpart-what-menu-item"]}>
    //                                                         <h3>Хрупкий груз</h3>
    //                                                         <Image src={bocal} alt="" />
    //                                                     </div>
    //                                                 </label>

    //                                             </div>
    //                                         </div>

    //                                         <div className={styles["what-menu_btn"]}>
    //                                             <label htmlFor="what-menu-2">
    //                                                 <div className={styles["orderdelivery-content-leftpart-what-menu-item"]}>
    //                                                     <h3>Груз 100 см</h3>
    //                                                     <Image src={boxes} alt="" />
    //                                                 </div>
    //                                             </label>
    //                                             <input id="what-menu-2" type="radio" name="radio" value="1" checked={true} />
    //                                         </div>

    //                                         <div className={styles["what-menu_btn"]}>
    //                                             <label htmlFor="what-menu-3">
    //                                                 <div className={styles["orderdelivery-content-leftpart-what-menu-item"]}>
    //                                                     <h3>Подарки</h3>
    //                                                     <Image src={present} alt="" />
    //                                                 </div>
    //                                             </label>
    //                                             <input id="what-menu-3" type="radio" name="radio" value="1" checked={true} />
    //                                         </div>
    //                                         <div className={styles["what-menu_btn"]}>
    //                                             <label htmlFor="what-menu-4">
    //                                                 <div className={styles["orderdelivery-content-leftpart-what-menu-item"]}>
    //                                                     <h3>Документы</h3>
    //                                                     <Image src={docs} alt="" />
    //                                                 </div>
    //                                             </label>
    //                                             <input id="what-menu-4" type="radio" name="radio" value="1" checked={true} />

    //                                         </div>

    //                                         <div className={styles["what-menu_btn"]}>
    //                                             <label htmlFor="what-menu-5">
    //                                                 <div className={styles["orderdelivery-content-leftpart-what-menu-item"]}>
    //                                                     <h3>Всё, что угодно</h3>
    //                                                     <Image src={all} alt="" />
    //                                                 </div>
    //                                             </label>

    //                                             <input id="what-menu-5" type="radio" name="radio" value="1" checked={true} />
    //                                         </div>
    //                                     </div>
    //                                     <div className={styles["orderdelivery-content-leftpart-what-options"]} >
    //                                         <div className={styles["orderdelivery-content-leftpart-what-priceblock"]} >
    //                                             <input type="text" placeholder="Ценность за шт." required={false} />
    //                                             <div className={styles["orderdelivery-content-leftpart-what-priceblock-mera"]} >
    //                                                 ₽
    //                                             </div>

    //                                         </div>
    //                                         <a href="#"><Image src={info} alt="" /></a>

    //                                         <div className={styles["orderdelivery-content-leftpart-sender-options-selectblock-container"]} >
    //                                             <div className={styles["orderdelivery-content-leftpart-sender-options-selectblock slctweight"]} >
    //                                                 <label className={styles["selectweight"]} htmlFor="slctweight">
    //                                                     <select id="slctweight" required={true}>
    //                                                         <option value="" disabled={false} selected={true}>До 0.5 кг(вес за 1 шт.)</option>
    //                                                         <option value="#"><p className={styles["ttt"]} ></p>До 1.0 кг(вес за 1 шт.)</option>
    //                                                         <option value="#">До 1.5 кг(вес за 1 шт.)</option>
    //                                                         <option value="#">До 2.0 кг(вес за 1 шт.)</option>
    //                                                         <option value="#">До 2.5 кг(вес за 1 шт.)</option>
    //                                                         <option value="#">До 3.0 кг(вес за 1 шт.)</option>
    //                                                         <option value="#">До 3.5 кг(вес за 1 шт.)</option>
    //                                                         <option value="#">До 4.0 кг(вес за 1 шт.)</option>
    //                                                         <option value="#">До 4.5 кг(вес за 1 шт.)</option>
    //                                                         <option value="#">До 5.0 кг(вес за 1 шт.)</option>
    //                                                         <option value="#">До 5.5 кг(вес за 1 шт.)</option>
    //                                                     </select>
    //                                                     <Image
    //                                                         src={selectArrowDown}
    //                                                         alt="select-arrow-down"
    //                                                     />
    //                                                 </label>
    //                                                 {/* <svg className={styles["sprites"]} >
    //                                                     <symbol id="select-arrow-down" viewbox="0 0 10 6">
    //                                                         <polyline points="1 1 5 5 9 1"></polyline>
    //                                                     </symbol>
    //                                                 </svg> */}
    //                                             </div >
    //                                             <div className={styles["orderdelivery-content-leftpart-what-weightblock-mera"]}>
    //                                                 кг
    //                                             </div>
    //                                         </div>

    //                                         <div className={styles["orderdelivery-content-leftpart-what-countblock"]}>
    //                                             <input type="text" placeholder="1" required={false} />
    //                                             <div className={styles["orderdelivery-content-leftpart-what-countblock-mera"]}>
    //                                                 шт
    //                                             </div>

    //                                         </div>
    //                                     </div>
    //                                     <div className={styles["orderdelivery-content-leftpart-what-dopinfo"]}>
    //                                         <div className={styles["accordion"]}>
    //                                             <div className={styles["tabwhat"]}>
    //                                                 <label htmlFor="tab1what" className={styles["tabwhat-title"]}>Добавить груз</label>
    //                                                 <input type="checkbox" id="tab1what" name="tab-group" />
    //                                                 <div className={styles["tabwhat-content"]}>

    //                                                 </div>

    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                     <button className={styles["orderdelivery-content-leftpart-what-addlocation-btn"]} type="button">
    //                                         Добавить адрес
    //                                     </button>
    //                                 </div>
    //                                 <div className={styles["orderdelivery-content-leftpart-details"]}>
    //                                     <h2 className={styles["upper"]}>Детали заказа</h2>
    //                                     <h3>Выберите вариант оплаты доставки:</h3>
    //                                     <div className={styles["form_orderdelivery-content-leftpart-details"]}>
    //                                         <label htmlFor="leftpart-details-1">Отправитель наличными</label>
    //                                         <input id="leftpart-details-1" type="radio" name="radio" value="1" checked={true} />
    //                                     </div>

    //                                     <div className={styles["form_orderdelivery-content-leftpart-details"]}>
    //                                         <label htmlFor="leftpart-details-2">Получатель наличными</label>
    //                                         <input id="leftpart-details-2" type="radio" name="radio" value="2" />
    //                                     </div>

    //                                     <div className={styles["form_orderdelivery-content-leftpart-details"]}>
    //                                         <label htmlFor="leftpart-details-3">
    //                                             Онлайн банковской картой <a href="#"><Image src={info} alt="" /></a>
    //                                         </label>
    //                                         <input id="leftpart-details-3" type="radio" name="radio" value="3" />

    //                                     </div>
    //                                     <div className={styles["orderdelivery-content-leftpart-promocode"]}>
    //                                         <h3>Промокод</h3>
    //                                         <input type="text" name="" id="" />
    //                                     </div>

    //                                 </div>
    //                             </div>
    //                             <div className={styles["orderdelivery-content-rightpart"]}>
    //                                 <div></div>
    //                                 <div className={styles["orderdelivery-content-rightpart-city"]}>
    //                                     <label className={styles["selectcity"]} htmlFor="slct">
    //                                         <select id="slctcity" required={true} className={styles["slctcity"]}>
    //                                             <option value="" selected={true}>
    //                                                 Москва
    //                                             </option>
    //                                             <option value="#"><Image src={mapGeo} alt="" />Санкт-Петербург</option>
    //                                             <option value="#">Воронеж</option>
    //                                             <option value="#">Сочи</option>
    //                                             <option value="#">Ростов-на-Дону</option>
    //                                             <option value="#">Краснодар</option>
    //                                             <option value="#">Владивосток</option>
    //                                             <option value="#">Екатеринбург</option>
    //                                             <option value="#">Курск</option>
    //                                             <option value="#">Орёл</option>
    //                                             <option value="#">Белгород</option>
    //                                         </select>
    //                                         <Image
    //                                             src={selectArrowDown}
    //                                             alt="select-arrow-down"
    //                                         />
    //                                         <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                             <path id="map" d="M13.9985 7.77976C13.9985 5.97402 13.2812 4.24223 12.0043 2.96538C10.7275 1.68852 8.99567 0.971191 7.18992 0.971191C5.38417 0.971191 3.65239 1.68852 2.37553 2.96538C1.09868 4.24223 0.381348 5.97402 0.381348 7.77976C0.381348 13.1226 7.18992 21.0286 7.18992 21.0286C7.18992 21.0286 13.9985 13.0976 13.9985 7.77976ZM3.83425 7.37614C3.8287 6.7107 4.02096 6.05862 4.38662 5.50263C4.75228 4.94664 5.27487 4.5118 5.88807 4.2533C6.50127 3.99479 7.17743 3.92427 7.83078 4.05069C8.48412 4.1771 9.08518 4.49475 9.5577 4.96333C10.0302 5.43191 10.3529 6.03029 10.4848 6.68255C10.6166 7.33482 10.5518 8.01155 10.2984 8.62689C10.0451 9.24223 9.61461 9.76844 9.06169 10.1387C8.50878 10.509 7.85833 10.7068 7.19287 10.7068C6.75349 10.7091 6.31797 10.6248 5.91119 10.4587C5.5044 10.2926 5.13434 10.048 4.82215 9.73884C4.50996 9.42966 4.26177 9.06199 4.09175 8.65683C3.92173 8.25168 3.83323 7.81699 3.8313 7.37761L3.83425 7.37614Z" fill="#4B4B4B" />
    //                                         </svg>
    //                                     </label>
    //                                     {/* <svg className={styles["sprites"]}>
    //                                         <symbol id="select-arrow-down" viewbox="0 0 10 6">
    //                                             <polyline points="1 1 5 5 9 1"></polyline>
    //                                         </symbol>
    //                                     </svg> */}
    //                                     <div className={styles["yandexmap"]} id="yandexmap">

    //                                     </div>
    //                                     <div className={styles["orderdelivery-content-rightpart-total"]}>
    //                                         <div className={styles["orderdelivery-content-rightpart-total-header"]}>
    //                                             <h3 className={styles["total_title"]}>Цена доставки</h3>
    //                                             <p className={styles["total_summ"]}>150 ₽</p>
    //                                         </div>
    //                                         <div className={styles["orderdelivery-content-rightpart-total-description-menu"]}>
    //                                             <div className={styles["orderdelivery-content-rightpart-total-description-menu-item"]}>
    //                                                 <h3>Забор груза</h3>
    //                                                 <p>Бесплатно</p>
    //                                             </div>
    //                                             <div className={styles["orderdelivery-content-rightpart-total-description-menu-item"]}>
    //                                                 <h3>От двери до двери</h3>
    //                                                 <p>Бесплатно</p>
    //                                             </div>
    //                                             <div className={styles["orderdelivery-content-rightpart-total-description-menu-item"]}>
    //                                                 <h3>Тариф</h3>
    //                                                 <p>140 ₽</p>
    //                                             </div>
    //                                             <div className={styles["orderdelivery-content-rightpart-total-description-menu-item"]}>
    //                                                 <h3>Гарантийный сбор
    //                                                     {/* <br {(мин. 10 руб.)} /> */}
    //                                                 </h3>
    //                                                 <p>10 ₽</p>
    //                                             </div>
    //                                         </div>
    //                                         <button type="submit" className={styles["orderdelivery-content-rightpart-total-sendform"]}>Запустить заказ</button>
    //                                         <p className={styles["orderdelivery-content-rightpart-total-accept"]}>Нажимая "Запустить заказ", я принимаю</p>
    //                                         <p className={styles["orderdelivery-content-rightpart-total-accept"]}><a href="#">соглашение </a>&nbsp;и& nbsp; <a href="#"> политику конфиденциальности.</a></p >
    //                                     </div >
    //                                 </div >
    //                             </div >
    //                         </div >
    //                     </form >
    //                 </div >
    //             </div >
    //         </div >
    //     </div >
    // );
}
