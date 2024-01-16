import { SearchForm } from '../../components/SearchForm/SearchForm';
import styles from './Searchpage.module.scss';
import documentImg from '../../assets/images/document-img.svg';
import foldersImg from '../../assets/images/folders-img.svg';
import bgImg from '../../assets/images/search-page_bg.svg';

export const Searchpage: React.FC = () => {

    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <div className={styles.search__section}>
                    <h1 className={styles.title}>Найдите необходимые данные в пару кликов.</h1>
                    <p className={styles.subtitle}>Задайте параметры поиска.<br />Чем больше заполните, тем точнее поиск</p>
                    <div className={styles.search__form__wrapper}>
                        <SearchForm />
                    </div>
                </div>

                <div className={styles.images__section}>
                    <div className={styles.up__images}>
                        <img src={documentImg} alt='' />
                        <img src={foldersImg} alt='' />
                    </div>
                    <div className={styles.down__images}>
                        <img src={bgImg} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}