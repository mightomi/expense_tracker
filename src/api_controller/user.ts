import { Request, Response, NextFunction } from "express";

const createUser =  async (req: Request, res: Response, next: NextFunction) => {
	console.log("createUser")
}

const getAllUser =  async (req: Request, res: Response, next: NextFunction) => {
	console.log("getAllUsers")
}

export {
	createUser,
	getAllUser
}