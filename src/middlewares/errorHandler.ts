import { Request, Response, NextFunction } from "express";

const ERRORS = {
    unauthorized: 401,
    conflict: 409,
    not_found: 404,
    bad_request: 400
}

export default  function errorHandler(
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
){
    const type: string = error.type;
    console.log(ERRORS['unauthorized'])
    let statusCode: number = error.type ? error.type : 500;
    if (!statusCode) return res.sendStatus(500);
    return res.status(statusCode).send(error.message);
    

}