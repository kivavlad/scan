import { Link } from "react-router-dom";
import styles from './notfound.module.scss';

export const Notfoundpage: React.FC = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Страница не найдена</h1>
                <Link to="/" className={styles.link}>На главную</Link>
            </div>
        </div>
    )
}