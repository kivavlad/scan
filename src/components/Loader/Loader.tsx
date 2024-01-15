import styles from './Loader.module.scss';

export const Loader: React.FC = () => {
    return (
        <>
            <div className={styles.lds_ring}><div></div><div></div><div></div><div></div></div>
        </>
    )
}