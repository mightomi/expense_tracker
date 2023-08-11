import { Response } from "express";

const responder = (res: Response, data: any, errorMessage?: any) => {
  if(data) {
    res.status(200).send({
      status: "success",
      data,
    });
  }
  else {
    res.status(400).send({
      status: "error",
      errorMessage,
    });
  }
};

export default responder;
