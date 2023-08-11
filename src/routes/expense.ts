import express from 'express';
import errorHandlerWrapper from "../utils/error_handler_wrapper";
import {
  addExpense,
} from "../api_controller/expense";

const router = express.Router();

router.post("/", errorHandlerWrapper(addExpense));

export {
  router as expenseRoutes
}
