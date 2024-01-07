import styles from './CarouselItem.module.scss';

type IProps = {
    title: string;
    src: any;
}

export const CarouselItem: React.FC<IProps> = (props) => {
    const { title, src } = props;

    return (
        <div className={styles.carousel__wrapper}>
            <div className={styles.carousel__img}>
                <img src={src} alt='' />
            </div>
            <div className={styles.carousel__text_wrapper}>
                <p>{title}</p>
            </div>
        </div>
    )
}