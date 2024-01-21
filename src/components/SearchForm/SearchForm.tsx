import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hook';
import { fetchHistograms, resetHistorgams } from '../../store/slice/histogramsSlice';
import { TONALITY_PARAMS } from '../../utils/config';
import { currentInnNumber, comparisonWithStartDate, validateDateRange, } from '../../utils/validate';
import type { ISearchParams } from '../../types/data';

import styles from './SearchForm.module.scss';
import checkIcon from '../../assets/icons/checkbox__container.svg';
import checkActive from '../../assets/icons/checkbox-active.svg';


export const SearchForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [inn, setInn] = useState('');
    const [tonality, setTonality] = useState(TONALITY_PARAMS[0].value);
    const [limit, setLimit] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [errorInn, setErrorInn] = useState(false);
    const [errorLimit, setErrorLimit] = useState(false);
    const [errorDate, setErrortDate] = useState(false);

    const [errorInnMessage, setErrorInnMessage] = useState('');
    const [errorLimitMessage, setErrorLimitMessage] = useState('');
    const [errorDateMessage, setErrorDateMessage] = useState('');

    let [maxFullness, setMaxFullness] = useState(true);
    let [inBusinessNews, setInBusinessNews] = useState(true);
    let [onlyMainRole, setOnlyMainRole] = useState(true);
    let [onlyWithRiskFactors, setOnlyWithRiskFactors] = useState(false);
    let [includeTechNews, setIncludeTechNews] = useState(false);
    let [includeAnnouncements, setIncludeAnnouncements] = useState(true);
    let [includeDigests, setIncludeDigests] = useState(false);

    const errorsText = [
        { message: 'Обязательное поле' },
        { message: 'Введите корректные данные' },
    ]
    
    function validateInputs(): boolean {
        let isCurrentInn = false;
        let isCurrentLimit = false;
        let isCurrentDate = false;
        let isTotalCurrent = false;

        // verification inn
        if (!inn.trim()) {
            isCurrentInn = false;
            setErrorInn(true);
            setErrorInnMessage(errorsText[0].message);
        } else if (!currentInnNumber(inn)) {
            isCurrentInn = false;
            setErrorInn(true);
            setErrorInnMessage(errorsText[1].message);
        } else {
            isCurrentInn = true;
            setErrorInn(false);
            setErrorInnMessage('');
        }

        // verification limit
        if (!limit.trim()) {
            isCurrentLimit = false;
            setErrorLimit(true);
            setErrorLimitMessage(errorsText[0].message);
        } else if (+limit < 1 || +limit > 100) {
            isCurrentLimit = false;
            setErrorLimit(true);
            setErrorLimitMessage(errorsText[1].message);
        } else {
            isCurrentLimit = true;
            setErrorLimit(false);
            setErrorLimitMessage('');
        }

        // verification date
        if (!startDate.length || !endDate.length) {
            isCurrentDate = false;
            setErrortDate(true);
            setErrorDateMessage(errorsText[0].message);
        } else if (!comparisonWithStartDate(startDate) || !comparisonWithStartDate(endDate)) {
            isCurrentDate = false;
            setErrortDate(true);
            setErrorDateMessage(errorsText[1].message);
        } else if (!validateDateRange(startDate, endDate)) {
            isCurrentDate = false;
            setErrortDate(true);
            setErrorDateMessage(errorsText[1].message);
        } else {
            isCurrentDate = true;
            setErrortDate(false);
            setErrorDateMessage('');
        }

        if (isCurrentInn && isCurrentLimit && isCurrentDate) {
            isTotalCurrent = true;
        }

        return isTotalCurrent;
    }

    const data: ISearchParams = {
        inn: inn,
        tonality: tonality,
        limit: limit,
        startDate:  startDate,
        endDate: endDate,
        maxFullness: maxFullness,
        inBusinessNews: inBusinessNews,
        onlyMainRole: onlyMainRole,
        onlyWithRiskFactors: onlyWithRiskFactors,
        includeTechNews: includeTechNews,
        includeAnnouncements: includeAnnouncements,
        includeDigests: includeDigests
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        validateInputs();

        if (validateInputs()) {
            dispatch(resetHistorgams());
            dispatch(fetchHistograms(data));
            navigate("/");
        }
    }

    useEffect(() => {
        if (inn.trim()) setErrorInn(false);
        if (limit.trim()) setErrorLimit(false);
        if (startDate.length && endDate.length) setErrortDate(false);
    }, [inn, limit, startDate, endDate])


    return (
        <div className={styles.form__wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>

                <div className={styles.form__left_section}>
                    <div className={styles.input__container}>
                        <label>ИНН компании *  7710137066</label>
                        <input 
                            type='number' 
                            className={errorInn ? styles.error__input : styles.input}
                            autoComplete='off'
                            placeholder='10 цифр'
                            value={inn}
                            onChange={(e) => setInn(e.target.value)}
                        />
                        {errorInn && <div className={styles.input_error__wrapper}><span>{errorInnMessage}</span></div>}
                    </div>

                    <div className={styles.input__container}>
                        <label>Тональность</label>
                        <select 
                            className={styles.select} 
                            value={tonality} 
                            onChange={(e) => setTonality(e.target.value)}
                        >
                            {TONALITY_PARAMS.map((item, index) => <option key={index} value={item.value}>{item.name}</option>)}
                        </select>
                    </div>

                    <div className={styles.input__container}>
                        <label>Количество документов в выдаче *</label>
                        <input 
                            type='number' 
                            className={errorLimit ? styles.error__input : styles.input}
                            autoComplete='off'
                            placeholder='От 1 до 100'
                            value={limit}
                            onChange={(e) => setLimit(e.target.value)}
                        />
                        {errorLimit && <div className={styles.input_error__wrapper}><span>{errorLimitMessage}</span></div>}
                    </div>

                    <div className={styles.date__container}>
                        <label>Диапазон поиска *</label>
                        <div className={styles.date_inputs}>
                            <input
                                type='date'
                                placeholder='Дата начала'
                                className={errorDate ? styles.error_date_input : styles.date_input}
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <input
                                type='date'
                                placeholder='Дата конца'
                                className={errorDate ? styles.error_date_input : styles.date_input}
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        {errorDate && <div className={styles.date_error__wrapper}><span>{errorDateMessage}</span></div>}
                    </div>
                </div>


                <div className={styles.form__right_section}>
                    <div className={styles.checkboxs__list}>
                        <div className={styles.checkbox__wrappper}><img src={maxFullness ? checkActive : checkIcon} onClick={() => setMaxFullness(maxFullness = !maxFullness)} alt='' /><span className={!maxFullness ? styles.un_search__params_span : styles.search__params_span}>Признак максимальной полноты</span></div>
                        <div className={styles.checkbox__wrappper}><img src={inBusinessNews ? checkActive : checkIcon} onClick={() => setInBusinessNews(inBusinessNews = !inBusinessNews)} alt='' /><span className={!inBusinessNews ? styles.un_search__params_span : styles.search__params_span}>Упоминания в бизнес-контексте</span></div>
                        <div className={styles.checkbox__wrappper}><img src={onlyMainRole ? checkActive : checkIcon} onClick={() => setOnlyMainRole(onlyMainRole = !onlyMainRole)} alt='' /><span className={!onlyMainRole ? styles.un_search__params_span : styles.search__params_span}>Главная роль в публикации</span></div>
                        <div className={styles.checkbox__wrappper}><img src={onlyWithRiskFactors ? checkActive : checkIcon} onClick={() => setOnlyWithRiskFactors(onlyWithRiskFactors = !onlyWithRiskFactors)} alt='' /><span className={!onlyWithRiskFactors ? styles.un_search__params_span : styles.search__params_span}>Публикации только с риск-факторами</span></div>
                        <div className={styles.checkbox__wrappper}><img src={includeTechNews ? checkActive : checkIcon} onClick={() => setIncludeTechNews(includeTechNews = !includeTechNews)} alt='' /><span className={!includeTechNews ? styles.un_search__params_span : styles.search__params_span}>Включать технические новости рынков</span></div>
                        <div className={styles.checkbox__wrappper}><img src={includeAnnouncements ? checkActive : checkIcon} onClick={() => setIncludeAnnouncements(includeAnnouncements = !includeAnnouncements)} alt='' /><span className={!includeAnnouncements ? styles.un_search__params_span : styles.search__params_span}>Включать анонсы и календари</span></div>
                        <div className={styles.checkbox__wrappper}><img src={includeDigests ? checkActive : checkIcon} onClick={() => setIncludeDigests(includeDigests = !includeDigests)} alt='' /><span className={!includeDigests ? styles.un_search__params_span : styles.search__params_span}>Включать сводки новостей</span></div>
                    </div>

                    <div className={styles.button__down_container}>
                        <div className={styles.button__wrapper}>
                            <button type='submit' className={styles.button}>Поиск</button>
                            <span>* Обязательные к заполнению поля</span>
                        </div>
                    </div>

                </div>

            </form>
        </div>
    )
}