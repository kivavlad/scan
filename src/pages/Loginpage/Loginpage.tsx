import styles from './Login.module.scss';
import bgImage from '../../assets/images/login__bg.jpg';
import { LoginForm } from '../../components/LoginForm/LoginForm';


export const Loginpage: React.FC = () => {

    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <div className={styles.login_page__left}>
                    <h1 className={styles.title}>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                    <div className={styles.image__container}>
                        <img src={bgImage} alt='' />
                    </div>
                </div>

                <div className={styles.login_page__right}>
                    <LoginForm />
                </div>

                <div className={styles.mobile_image__container}>
                    <img src={bgImage} alt='' />
                </div>
            </div>
        </div>
    )
}