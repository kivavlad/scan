import { useState } from 'react';
import { TONALITY_PARAMS } from '../../utils/config';
import styles from './SearchForm.module.scss';

export const SearchForm: React.FC = () => {
    const [inn, setInn] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
    }

    return (
        <div className={styles.form__wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>

                <div className={styles.form__left_section}>
                    <div className={styles.input__container}>
                        <label>ИНН компании *</label>
                        <input 
                            type='number' 
                            autoComplete='off'
                            placeholder='10 цифр'
                            value={inn}
                            onChange={(e) => setInn(e.target.value)}
                        />
                    </div>

                    <div className={styles.input__container}>
                        <label>Тональность</label>
                        <select>
                            {TONALITY_PARAMS.map((item, index) => <option key={index} value={item.value}>{item.name}</option>)}
                        </select>
                    </div>

                    <div className={styles.input__container}>
                        <label>Количество документов в выдаче *</label>
                        <input 
                            type='number' 
                            autoComplete='off'
                            placeholder='От 1 до 1000'
                        />
                    </div>

                    <div className={styles.date__container}>
                        <label>Диапазон поиска *</label>
                        <div className={styles.date_inputs}>
                            <input
                                type='date'
                                placeholder='Дата начала'
                            />
                            <input
                                type='date'
                                placeholder='Дата конца'
                            />
                        </div>
                    </div>
                </div>


            </form>
        </div>
    )
}