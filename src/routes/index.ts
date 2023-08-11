import express, { Application } from 'express';

import { userRoutes } from './user';
import { expenseRoutes } from './expense';
import { settlementRoutes } from './settlement';



const init = (app: Application) => {
	app.use("/api/v1/users", userRoutes);
	app.use("/api/v1/expenses", expenseRoutes);
	app.use("/api/v1/settlements", settlementRoutes);

}

export {
	init
}
