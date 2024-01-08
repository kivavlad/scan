export type ITarifs = {
    id: number;
    tarif_name: string;
    description: string;
    img: any;
    current: boolean;
    price: string;
    old_price: string;
    description_installment: string;
    tarif_option1: string;
    tarif_option2: string;
    tarif_option3: string;
    button: string;
    colors: {
        card: { bg: string, color: string },
        button: {bg: string, color: string},
    }
}