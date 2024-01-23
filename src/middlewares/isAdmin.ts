import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser?.isAdmin) {
        throw new NotAuthorizedError();
    }

    next();
};
