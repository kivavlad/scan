import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/icons/header-logo.svg';

type IProps = {
    isLogged: boolean;
    setIsLogged: any;
}

export const Header: React.FC<IProps> = (props) => {
    const { isLogged, setIsLogged } = props;

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__content}>

                    <div className={styles.header__logo}>
                        <img src={logo} alt='' />
                    </div>

                    <div className={styles.header__nav}>
                        <Link to="/" className={styles.header__nav_item}>Главная</Link>
                        <a href="/" className={styles.header__nav_item}>Тарифы</a>
                        <a href="/" className={styles.header__nav_item}>FAQ</a>
                    </div>

                    {
                        !isLogged ?
                            <>
                                <div className={styles.header__tarifs_info_wrapper}>
                                    <div className={styles.header__tarifs_info_wrapper__left}>
                                        <p>Использовано компаний</p>
                                        <p>Лимит по компаниям</p>
                                    </div>
                                    <div className={styles.header__tarifs_info_wrapper__right}>
                                        <span className={styles.total__company}>34</span>
                                        <span className={styles.company__limit}>100</span>
                                    </div>
                                </div>

                                <div className={styles.header__user_info_wrapper}>
                                    <div className={styles.user__info}>
                                        <span className={styles.user__name}>Пользователь</span>
                                        <button className={styles.logout__button}>Выйти</button>
                                    </div>
                                    <div className={styles.user__logo}></div>
                                </div>
                            </>
                        :
                            <div className={styles.header__login_wrapper}>
                                <span className={styles.header__register_link}>Зарегистрироваться</span>
                                <span className={styles.header__login_line}></span>
                                <button type='button' className={styles.header__login_button}>Войти</button>
                            </div>
                    }

                </div>
            </div>
        </header>
    )
}