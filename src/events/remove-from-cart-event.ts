import { Subjects } from './subjects';

export interface RemoveFromCart {
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
