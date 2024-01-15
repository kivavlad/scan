import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/config';
import { useAppDispatch } from '../../hook';
import { setToken } from "../../store/slice/makeAuthSlice";
import { fetchAccountInfo } from '../../store/slice/accountInfoSlice';
import type { IUserData } from '../../types/data';
import type { IAccessToken } from '../../types/data';

import styles from './LoginForm.module.scss';
import googleIcon from '../../assets/icons/google.svg';
import fbIcon from '../../assets/icons/fb.svg';
import yaIcon from '../../assets/icons/yandex.svg';
import lockIcon from '../../assets/images/login__lock.png';


export const LoginForm: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isValue, setIsValue] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (login.trim() && password.trim()) {
            setIsValue(true);
        } else {
            setIsValue(false);
        }
    }, [login, password])

    const userdata: IUserData = {
        login: login.trim(),
        password: password.trim(),
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (login.trim() && password.trim()) {
            const response = await fetch(`${API_BASE_URL}/api/v1/account/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json-patch+json',
                },
                body: JSON.stringify(userdata)
            })

            const data = await response.json() as IAccessToken;
            
            if (response.ok) {
                dispatch(setToken(data));
                dispatch(fetchAccountInfo(data.accessToken));
                navigate("/");
                setError(false);
            } else {
                setError(true);
            }

            setLogin('');
            setPassword('');
        }
    }


    return (
        <div className={styles.wrapper}>

            <img src={lockIcon} alt='' className={styles.lock__icon} />

            <div className={styles.content__wrapper}>
                <div className={styles.nav}>
                    <span className={styles.nav__item_active}>Войти</span>
                    <span className={styles.nav__item}>Зарегистрироваться</span>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.form__text__container}>
                        <h3>Логин или номер телефона: sf_student1</h3>
                        <input 
                            type='text' 
                            autoComplete='off'
                            className={error ? styles.error__input : styles.input}
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>

                    <div className={styles.error__container}>
                        {error && <span>Введите корректные данные</span>}
                    </div>

                    <div className={styles.form__text__container}>
                        <h3>Пароль: 4i2385j</h3>
                        <input 
                            type='password' 
                            autoComplete='off'
                            className={error ? styles.error__input : styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className={styles.error__container}>
                        {error && <span>Неправильный пароль</span>}
                    </div>

                    <button type='submit' className={isValue ? styles.button__active : styles.button}>Войти</button>
                    <span className={styles.restore_password}>Восстановить пароль</span>
                </form>

                <div className={styles.icons__wrapper}>
                    <span className={styles.icons__title}>Войти через:</span>
                    <div className={styles.icons__list}>
                        <img src={googleIcon} alt='' />
                        <img src={fbIcon} alt='' />
                        <img src={yaIcon} alt='' />
                    </div>
                </div>

            </div>

        </div>
    )
}