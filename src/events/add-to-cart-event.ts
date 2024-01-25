import { Subjects } from './subjects';

export interface AddToCart {
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
