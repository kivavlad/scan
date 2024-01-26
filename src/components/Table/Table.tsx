import { useAppSelector } from '../../store/hook';
import { formattedDate } from '../../utils/validate';
import styles from './Table.module.scss';

export const Table: React.FC = () => {
    const histogramItems = useAppSelector((state) => state.histograms.items);
    const totalDocuments = histogramItems[0]?.data[0].data;
    const riskFactors = histogramItems[0]?.data[1].data;

    return (
        <div className={styles.wrapper}>

            <div className={styles.table__container}>
                <div className={styles.table__description}>
                    <p>Период</p>
                    <p>Всего</p>
                    <p>Риски</p>
                </div>

                {totalDocuments.map((item: any, index: any) => (
                    <div key={index} className={styles.table__content}>
                        <p>{formattedDate(item.date)}</p>
                        <p>{item.value}</p>
                        <p>{riskFactors[index].value}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}