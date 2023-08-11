import express, { Application } from 'express';

import { userRoutes } from './user';
// import { expenseRoutes } from './expense';


const init = (app: Application) => {
	app.use("/api/v1/user", userRoutes);
	// app.use("/api/v1/expense", expenseRoutes);
}

export {
	init
}
