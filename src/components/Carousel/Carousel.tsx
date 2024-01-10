import Slider from 'react-slick';
import { CustomArrowProps } from 'react-slick';
import { CarouselItem } from './CarouselItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import stopwatchIcon from '../../assets/icons/stopwatch.svg';
import loopIcon from '../../assets/icons/loop.svg';
import lockIcon from '../../assets/icons/lock.svg';
import prevArrow from '../../assets/icons/prev_arrow.svg';
import nextArrow from '../../assets/icons/next_arrow.svg';


export const Carousel: React.FC = () => {

    const carouselItems = [
        {id: 1, title: 'Высокая и оперативная скорость обработки заявки', src: stopwatchIcon},
        {id: 2, title: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос', src: loopIcon},
        {id: 3, title: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству', src: lockIcon},
        {id: 4, title: 'Высокая и оперативная скорость обработки заявки', src: stopwatchIcon},
        {id: 5, title: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос', src: loopIcon},
        {id: 6, title: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству', src: lockIcon},
    ]

    function RightNavArrow(props: CustomArrowProps): React.JSX.Element {
        const { className, onClick } = props;
        return (
            <div className={className} style={{width: '32px', height: '32px', top: '45%'}} onClick={onClick}>
                <img src={prevArrow} alt='<--' />
            </div>
        );
    }

    function LeftNavArrow(props: CustomArrowProps): React.JSX.Element {
        const { className, onClick } = props;
        return (
            <div className={className} style={{width: '32px', height: '32px', top: '45%'}} onClick={onClick}>
                <img src={nextArrow} alt='-->' />
            </div>
        );
    }

    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        responsive: [
            { breakpoint: 1100, settings: { slidesToShow: 2, } },
            { breakpoint: 850, settings: { slidesToShow: 1, } },
        ],
        nextArrow: <LeftNavArrow />,
        prevArrow: <RightNavArrow />,
    };
  
    return(
        <div className='container'>
            <Slider {...settings}>
                {carouselItems.map((item) => <CarouselItem key={item.id} {...item} />)}
            </Slider>
        </div>
    )
}