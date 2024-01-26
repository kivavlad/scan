import { useAppSelector } from "../../store/hook";
import { Table } from '../../components/Table/Table';
import { Documents } from '../../components/Documents/Documents';
import styles from './result.module.scss';
import searchImg from '../../assets/images/result-logo.jpg';

export const Resultpage: React.FC = () => {
    const documentsList = useAppSelector((state) => state.docs.documents);

    return (
        <div className='container'>
            <div className={styles.wrapper}>

                <div className={styles.hero__section}>
                    <div className={styles.hero__text_wrapper}>
                        <h1 className={styles.hero__title}>Ищем. Скоро <br /> будут результаты</h1>
                        <p className={styles.hero__subtitle}>Поиск может занять некоторое время, просим сохранять терпение.</p>
                    </div>
                    <div className={styles.hero__image_wrapper}>
                        <img src={searchImg} alt='' />
                    </div>
                </div>

                <div className={styles.table__section}>
                    <h1 className={styles.sections__title}>Общая сводка</h1>
                    <p className={styles.table__subtitle}>Найдено {documentsList[0]?.length} вариантов</p>
                    <div className={styles.table__results_wrapper}>
                        <Table />
                    </div>
                </div>

                <div className={styles.cards__section}>
                    <h1 className={styles.sections__title}>Список документов</h1>
                    <div className={styles.cards__wrapper}>
                        <Documents />
                    </div>
                </div>

            </div>
        </div>
    )
}