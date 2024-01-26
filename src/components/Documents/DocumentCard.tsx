import { formattedDate, transformWords } from '../../utils/validate';
import { getContent } from '../../utils/xmlParcer';
import styles from './DocumentCard.module.scss';
import cardMockImg from '../../assets/images/card-bg.jpg';

export const DocumentCard: React.FC = (props: any) => {
    const { issueDate, content: {markup}, source: {name}, title: {text}, url, attributes: {wordCount} } = props?.ok;
    const { bgUrl, content } = getContent(markup);
    const words = ['слово', 'слова', 'слов'];
     
    return (
        <div className={styles.card__container}>
            <div className={styles.card__header}>
                <span>{formattedDate(issueDate)}</span>
                <span>{name.slice(0, 30)}</span>
            </div>

            <div className={styles.card__main}>
                <div className={styles.card__title_wrapper}>
                    <h2 className={styles.card__title}>{text}</h2>
                </div>
                <div className={styles.card__attributes}>
                    <span>Технические новости</span>
                </div>
                <div className={styles.card__image}>
                    <img src={Boolean(bgUrl) ? bgUrl : cardMockImg} alt='' />
                </div>

                <div className={styles.card__text_content}>
                    <p>{content}</p>
                </div>
            </div>

            <div className={styles.card__footer}>
                <button type='button' className={styles.card__button}>
                    <a target='_blank' rel="noreferrer" href={url}>Читать в источнике</a>
                </button>
                <div className={styles.card__word_count}>
                    <span>{transformWords(wordCount, words)}</span>
                </div>
            </div>
        
        </div>
    )
}