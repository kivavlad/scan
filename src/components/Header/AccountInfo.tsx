import { useAppSelector } from '../../store/hook';
import { Loader } from '../Loader/Loader';
import styles from './header.module.scss';

export const AccountInfo: React.FC = () => {
    const loading = useAppSelector((state) => state.accountInfo.loading);
    const data = useAppSelector((state) => state.accountInfo.eventFiltersInfo);

    return (
        <div className={styles.header__tarifs_info_wrapper}>
            {loading ?
                <div className={styles.loader__wrapper}>
                    <Loader />
                </div>
            :
                <>
                    <div className={styles.header__tarifs_info_wrapper__left}>
                        <p>Использовано компаний</p>
                        <p>Лимит по компаниям</p>
                    </div>
                    <div className={styles.header__tarifs_info_wrapper__right}>
                        <span className={styles.total__company}>{data.usedCompanyCount}</span>
                        <span className={styles.company__limit}>{data.companyLimit}</span>
                    </div>
                </>
            }
        </div>
    )
}