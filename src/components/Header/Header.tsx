import { useAppDispatch, useAppSelector } from '../../store/hook';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../store/slice/makeAuthSlice';
import { setIsLogged } from '../../store/slice/accountInfoSlice';
import { HeaderBurger } from '../HeaderBurger/HeaderBurger';
import { AccountInfo } from './AccountInfo';

import styles from './header.module.scss';
import logo from '../../assets/icons/header-logo.svg';


export const Header: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isLogged = useAppSelector((state) => state.accountInfo.isLogged);

    function handleLogOut() {
        dispatch(setIsLogged());
        dispatch(logOut());
        navigate("/");
    }

    return (
        <header className={styles.header}>
            <div className='container'>
                
                <div className={styles.header__content}>

                    <div className={styles.header__logo}>
                        <img src={logo} alt='' />
                    </div>

                    <div className={styles.header__nav}>
                        <Link to="/" className={styles.header__nav_item}>Главная</Link>
                        <Link to="/" className={styles.header__nav_item}>Тарифы</Link>
                        <Link to="/" className={styles.header__nav_item}>FAQ</Link>
                    </div>

                    {
                        isLogged ?
                            <div className={styles.isLogged__wrapper}>
                                <AccountInfo />

                                <div className={styles.header__user_info_wrapper}>
                                    <div className={styles.user__info}>
                                        <span className={styles.user__name}>Владислав</span>
                                        <button onClick={handleLogOut} className={styles.logout__button}>Выйти</button>
                                    </div>
                                    <div className={styles.user__logo}></div>
                                </div>
                            </div>
                        :
                            <div className={styles.header__login_wrapper}>
                                <span className={styles.header__register_link}>Зарегистрироваться</span>
                                <span className={styles.header__login_line}></span>
                                <Link to="/login" className={styles.header__login_button}>Войти</Link>
                            </div>
                    }

                    <div className={styles.header__burger_wrapper}>
                        <HeaderBurger />
                    </div>

                </div>

            </div>
        </header>
    )
}