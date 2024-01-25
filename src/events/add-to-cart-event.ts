import { Subjects } from './subjects';

export interface AddToCart {
    subject: Subjects.AddToCart;
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
