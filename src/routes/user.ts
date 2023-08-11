import express from 'express';
import errorHandlerWrapper from "../utils/error_handler_wrapper";
import {
  createUser,
  getAllUser,
} from "../api_controller/user";

const router = express.Router();

router.post("/", errorHandlerWrapper(createUser));
router.get("/", errorHandlerWrapper(getAllUser));


export {
  router as userRoutes
}
