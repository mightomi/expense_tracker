import { Request, Response, NextFunction } from "express";
import responder from '../utils/responder';

import { AppDataSource } from "../data-source";

import { Expense } from "../entity/Expense";
const expenseRepository: any = AppDataSource.getRepository(Expense);

const addExpense =  async (req: Request, res: Response, next: NextFunction) => {
	const {
		payerId,
		amount
	} = req.body

	console.log("all ok")

	const newExpense = await expenseRepository.create({
		payerId: payerId,
		amount: amount
	})
	const expenseRecord = await expenseRepository.save(newExpense);

	responder(res, expenseRecord)
}

export {
	addExpense,
}
