import { Request, Response, NextFunction } from "express";
import responder from '../utils/responder';

import Settlement from '../services/Settlement'

const settlement = async (req: Request, res: Response, next: NextFunction) => {
	const {
		userId
	} = req.body

    const settlementReport = await new Settlement(userId).getSettlementRaw()
	console.log(settlementReport)
	responder(res, settlementReport)
}

export {
	settlement,
}
