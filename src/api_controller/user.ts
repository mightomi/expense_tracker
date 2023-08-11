import { Request, Response, NextFunction } from "express";
import responder from '../utils/responder';


import { AppDataSource } from "../data-source";

import { User } from "../entity/User";
const userRepository: any = AppDataSource.getRepository(User);

const createUser =  async (req: Request, res: Response, next: NextFunction) => {
	const {
		firstName,
		lastName
	} = req.body

	let user = await userRepository.findOneBy({
		firstName: firstName,
		lastName: lastName
	})
	if(user) throw new Error(`User already exists for the given name. Try a another name`)

	const newUser = await userRepository.create({
		firstName: firstName,
		lastName: lastName
	})
	user = await userRepository.save(newUser);
	
	responder(res, user)
}

const getAllUser =  async (req: Request, res: Response, next: NextFunction) => {
	const allUsers = await userRepository.find()
	responder(res, allUsers)
}

const getUser =  async (req: Request, res: Response, next: NextFunction) => {
	console.log("getAllUsers")
}

export {
	createUser,
	getAllUser,
	getUser
}