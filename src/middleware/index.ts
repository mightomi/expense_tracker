import cookieParser from 'cookie-parser';
import express, { Application } from 'express';

const init = (app: Application) => {
	// --- General Middleware ---
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
}


export {
	init
}
