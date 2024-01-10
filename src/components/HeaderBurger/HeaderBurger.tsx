import styles from './HeaderBurger.module.scss';
import logo from '../../assets/icons/scan-white-logo.svg';
import closeIcon from '../../assets/icons/close-icon.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const HeaderBurger: React.FC = () => {
    const [activeBurger, setActiveBurger] = useState(false);
    const [isLogged] = useState(false);

    useEffect(() => {
        if (activeBurger) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [activeBurger])

    return(
        <>

            <div onClick={() => setActiveBurger(true)} className={styles.burger__container}>
                <span className={styles.first__line}></span>
                <span className={styles.second__line}></span>
                <span className={styles.third__line}></span>
            </div>


            <div className={activeBurger ? styles.burger__menu__active : styles.burger__menu}>
                <div className={styles.burger__menu_content}>

                    <div className={styles.burger__menu_header}>
                        <div className={styles.burger__logo}>
                            <img src={logo} alt='' />
                        </div>
                        <div onClick={() => setActiveBurger(false)} className={styles.burger__close}>
                            <img src={closeIcon} alt='' />
                        </div>
                    </div>

                    <div className={styles.burger__menu_main}>
                        <div className={styles.burger__menu_nav}>
                            <Link to="/" className={styles.burger__menu_nav_item}>Главная</Link>
                            <Link to="/" className={styles.burger__menu_nav_item}>Тарифы</Link>
                            <Link to="/" className={styles.burger__menu_nav_item}>FAQ</Link>
                        </div>

                        {
                            isLogged ?
                                <>
                                    <div className={styles.burger__tarifs_info_wrapper}>
                                        <div className={styles.burger__tarifs_info_wrapper__left}>
                                            <p>Использовано компаний</p>
                                            <p>Лимит по компаниям</p>
                                        </div>
                                        <div className={styles.burger__tarifs_info_wrapper__right}>
                                            <span className={styles.total__company}>34</span>
                                            <span className={styles.company__limit}>100</span>
                                        </div>
                                    </div>

                                    <div className={styles.burger__user_info_wrapper}>
                                        <div className={styles.user__info}>
                                            <span className={styles.user__name}>Пользователь</span>
                                            <button className={styles.logout__button}>Выйти</button>
                                        </div>
                                        <div className={styles.user__logo}></div>
                                    </div>
                                </>
                            :
                                <div className={styles.burger__login_wrapper}>
                                    <span className={styles.burger__register_link}>Зарегистрироваться</span>
                                    <button type='button' className={styles.burger__login_button}>Войти</button>
                                </div>
                        }
                    </div>

                </div>
            </div>
        
        </>
    )
}