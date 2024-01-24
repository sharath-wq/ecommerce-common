import { Subjects } from './subjects';

export interface ProductUpdatedEvent {
    subject: Subjects.ProductUpdated;
    data: {
        id: string;
        version: number;
        title: string;
        price: number;
        userId: string;
        image: string;
        orderId?: string;
    };
}
