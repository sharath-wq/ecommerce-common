import { Subjects } from './subjects';

export interface RemoveFromCart {
    subject: Subjects.RemoveFromCart;
    data: {
        id: string;
        userId: string;
        products: [
            {
                id: string;
                title: string;
                price: number;
            }
        ];
    };
}
