import express, { Application } from 'express';

const init = (app: Application) => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
}

export {
	init
}
