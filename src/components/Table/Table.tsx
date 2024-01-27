import { useRef } from 'react';
import { useAppSelector } from '../../store/hook';
import { formattedDate } from '../../utils/validate';
import styles from './Table.module.scss';

import prevArrow from '../../assets/icons/prev_arrow.svg';
import nextArrow from '../../assets/icons/next_arrow.svg';

export const Table: React.FC = () => {
    const histogramItems = useAppSelector((state) => state.histograms.items);
    const totalDocuments = histogramItems[0]?.data[0]?.data;
    const riskFactors = histogramItems[0]?.data[1]?.data;
    const slider: any = useRef(null);
    let position = 0;

    const prevHandler = () => {
        position += 137
        slider.current.childNodes.forEach((element: any) => {
            element.style = `transform: translateX(${position}px)`
        })
    }

    const nextHandler = () => {
        position -= 137
        slider.current.childNodes.forEach((element: any) => {
            element.style = `transform: translateX(${position}px)`
        })
    }

    return (
        <div className={styles.wrapper}>
            <button type='button' onClick={prevHandler}>
                <img src={prevArrow} alt='' />
            </button>

            <div className={styles.table__container}>
                <div className={styles.table__description}>
                    <p>Период</p>
                    <p>Всего</p>
                    <p>Риски</p>
                </div>

                {totalDocuments?.length ?
                    <div ref={slider} className={styles.table__slider_wrapper}>
                        {totalDocuments.map((item: any, index: any) => (
                            <div key={index} className={styles.table__content}>
                                <p>{formattedDate(item.date)}</p>
                                <p>{item.value}</p>
                                <p>{riskFactors[index].value}</p>
                            </div>
                        ))}
                    </div>
                :
                    <div className={styles.table__title}>
                        <h2>Ничего не найдено</h2>
                    </div>
                }
            </div>

            <button type='button' onClick={nextHandler}>
                <img src={nextArrow} alt='' />
            </button>
        </div>
    )
}