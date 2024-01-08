import { Carousel } from '../../components/Carousel/Carousel';
import { Tarifs } from '../../components/Tarifs/Tarifs';

import styles from './Homepage.module.scss';
import heroImg from '../../assets/images/hero-img.jpg';
import homeLeftImg from '../../assets/images/home-left1.jpg';
import homeRightImg from '../../assets/images/home-right.jpg';


export const Homepage: React.FC = () => {

    return (
        <div className="container">

            <section className={styles.hero__section}>
                <div className={styles.hero__text_wrapper}>
                    <h1 className={styles.hero__title}>сервис по поиску публикаций<br/> о компании<br/> по его ИНН</h1>

                    <p className={styles.hero__subtitle}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>

                    <div className={styles.hero__button_wrapper}>
                        <button type='button' className={styles.hero__btn}>Запросить данные</button>
                    </div>
                </div>

                <div className={styles.hero__image_wrapper}>
                    <img src={heroImg} alt='hero' />
                </div>
            </section>

            <section className={styles.carousel__section}>
                <h1 className={styles.carousel__title}>Почему именно мы</h1>
                <div className={styles.carousel__wrapper}>
                    <Carousel />
                </div>
            </section>

            <section className={styles.home__image_section}>
                <div className={styles.home__left__image}>
                    <img src={homeLeftImg} alt='' />
                </div>
                <div className={styles.home__rigth__image}>
                    <img src={homeRightImg} alt='' />
                </div>
            </section>

            <section className={styles.tarifs__section}>
                <h1 className={styles.tarifs__title}>наши тарифы</h1>
                <div className={styles.tafifs__cards}>
                    <Tarifs />
                </div>
            </section>

        </div>
    )
    
}