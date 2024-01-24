import { Subjects } from './subjects';

export interface CartCreatedEvent {
    subject: Subjects.CartCreated;
    data: {
        id: string;
        userId: string;
    };
}
