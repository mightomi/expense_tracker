import { Request, Response, NextFunction } from "express";
import responder from '../utils/responder';


const settlement = async (req: Request, res: Response, next: NextFunction) => {
	responder(res, 'expenseRecord')
}

export {
	settlement,
}
