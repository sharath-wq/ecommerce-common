import { Subjects } from './subjects';

export interface RemoveFromCartEvent {
    subject: Subjects.RemoveFromCart;
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
