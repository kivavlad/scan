import styles from './TarifsCard.module.scss';
import { ITarifs } from '../../types/data';
import checkboxIcon from '../../assets/icons/green-check-tarif_option.svg';


export const TarifsCard: React.FC<ITarifs> = (props) => {

    return (
        <div className={styles.tarif_card__container}>

            <div className={styles.card__header} 
                style={{ background: props.colors.card.bg, color: props.colors.card.color }}
            
            >
                <div className={styles.card__header_text}>
                    <h2 className={styles.tarif__title}>{props.tarif_name}</h2>
                    <p className={styles.tafifs__description}>{props.description}</p>
                </div>
                <div className={styles.card__header_image}>
                    <img src={props.img} alt='' />
                </div>
            </div>

            <div className={styles.card__main}>
                <div className={styles.card__main_price_wrapper}>
                    <div className={styles.price__wrapper}>
                        <h2 className={styles.tarif__price}>{props.price}</h2>
                        <h3 className={styles.tarif__oldprice}>{props.old_price}</h3>
                    </div>
                    {props.description_installment.length > 0 && 
                        <p className={styles.price__description}>{props.description_installment}</p>    
                    }
                </div>
                <div className={styles.card__main_tarif_options_wrapper}>
                    <h4 className={styles.tarif__options__title}>В тариф входит:</h4>
                    <div className={styles.tarif__options_list}>
                        <div className={styles.tarif__options__item}>
                            <img src={checkboxIcon} alt='' />
                            <span>{props.tarif_option1}</span>
                        </div>
                        <div className={styles.tarif__options__item}>
                            <img src={checkboxIcon} alt='' />
                            <span>{props.tarif_option2}</span>
                        </div>
                        <div className={styles.tarif__options__item}>
                            <img src={checkboxIcon} alt='' />
                            <span>{props.tarif_option3}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.card__main_button_wrapper}>
                <button style={{ background: props.colors.button.bg, color: props.colors.button.color}} className={styles.tafifs__btn}>
                    {props.button}
                </button>
            </div>

        </div>
    )
}