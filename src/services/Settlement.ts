import { AppDataSource } from "../data-source";

import { Expense } from "../entity/Expense";
const expenseRepository: any = AppDataSource.getRepository(Expense);

import { User } from "../entity/User";
const userRepository: any = AppDataSource.getRepository(User);

class Settlement {
	private payerId: string;

	public constructor(payerId: string) {
			this.payerId = payerId;
		}

	public getSettlementRaw = async () => {

		let totalSpend = await expenseRepository.createQueryBuilder('expense')
																							.select('SUM(expense.amount)', 'totalSpend')
																							.getRawOne()
		const userCount = await userRepository.count();
		const averageSpend = totalSpend.totalSpend / userCount

		const amtPaidPerPerson = await expenseRepository.createQueryBuilder('expense')
																										.select("expense.payerId")
																										.addSelect("SUM(expense.amount)", "sum")
																										.groupBy("expense.payerId")
																										.getRawMany()

		let settlementArr = []
		for (const amtDetail of amtPaidPerPerson) {
			if (averageSpend - amtDetail['sum'] === 0) continue

			console.log(averageSpend)
			console.log(amtDetail['sum'])

			console.log()
			settlementArr.push({
				userId: amtDetail['expense_payerId'],
				amountDue: averageSpend - amtDetail['sum']
			})
		}

		return settlementArr
	}

	public averageSpend = async () => {
		const totalSpend = expenseRepository.createQueryBuilder('expense')
																				.select('SUM(expense.amount)', 'totalSpend')

		
	}
}

export default Settlement