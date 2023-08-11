import express from 'express';
import errorHandlerWrapper from "../utils/error_handler_wrapper";
import {
  settlement
} from "../api_controller/settlement";

const router = express.Router();

router.get("/", errorHandlerWrapper(settlement));


export {
  router as settlementRoutes
}
