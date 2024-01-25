import { Subjects } from './subjects';

export interface AddToCartEvent {
    subject: Subjects.AddToCart;
    data: {
        id: string;
        userId: string;
        product: {
            id: string;
            price: number;
            title: string;
        };
    };
}
