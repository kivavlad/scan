import { TarifsCard } from './TarifsCard';

import beginnerTarifIcon from '../../assets/icons/lamp.svg';
import proTarifIcon from '../../assets/icons/darts.svg';
import businessTarifIcon from '../../assets/icons/laptop.svg';


export const Tarifs: React.FC = () => {

    const tarifsParams = [
        {
            id: 1,
            tarif_name: 'Beginner',
            description: 'Для небольшого исследования',
            img: beginnerTarifIcon,
            current: false,
            price: '799 ₽',
            old_price: '1 200 ₽',
            description_installment: 'или 150 ₽/мес. при рассрочке на 24 мес.',
            tarif_option1: 'Безлимитная история запросов',
            tarif_option2: 'Безопасная сделка',
            tarif_option3: 'Поддержка 24/7',
            button: 'Подробнее',
            colors: {
                card: { bg: '#FFB64F', color: '#000000' },
                button: { bg: '#5970FF', color: '#FFFFFF' },
            }
        },
        {
            id: 2,
            tarif_name: 'Pro',
            description: 'Для HR и фрилансеров',
            img: proTarifIcon,
            current: false,
            price: '1 299 ₽',
            old_price: '2 600 ₽',
            description_installment: 'или 279 ₽/мес. при рассрочке на 24 мес.',
            tarif_option1: 'Все пункты тарифа Beginner',
            tarif_option2: 'Экспорт истории',
            tarif_option3: 'Рекомендации по приоритетам',
            button: 'Подробнее',
            colors: {
                card: { bg: '#7CE3E1', color: '#000000' },
                button: { bg: '#5970FF', color: '#FFFFFF' },
            }
        },
        {
            id: 3,
            tarif_name: 'Business',
            description: 'Для корпоративных клиентов',
            img: businessTarifIcon,
            current: false,
            price: '2 379 ₽',
            old_price: '3 700 ₽',
            description_installment: '',
            tarif_option1: 'Все пункты тарифа Pro',
            tarif_option2: 'Безлимитное количество запросов',
            tarif_option3: 'Приоритетная поддержка',
            button: 'Подробнее',
            colors: {
                card: { bg: '#000000', color: '#FFFFFF' },
                button: { bg: '#5970FF', color: '#FFFFFF' },
            }
        },
    ]

    return (
        <>
            {tarifsParams.map((item) => <TarifsCard key={item.id} {...item} />)}
        </>
    )
}