import styles from './footer.module.scss';
import logo from '../../assets/icons/scan-white-logo.svg';

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className='container'>

                <div className={styles.footer__content}>
                    <div className={styles.footer__logo}>
                        <img src={logo} alt='' />
                    </div>

                    <div className={styles.footer__contacts}>
                        <span className={styles.contacts__item}>г. Москва, Цветной б-р, 40</span>
                        <span className={styles.contacts__item}>+7 495 771 21 11</span>
                        <span className={styles.contacts__item}>info@skan.ru</span>
                        
                        <a href='https://github.com/KivaVlad' target='_blank' rel="noreferrer" className={styles.link}>by <span>@kivavlad</span></a>
                    </div>
                </div>

            </div>
        </footer>
    )
}