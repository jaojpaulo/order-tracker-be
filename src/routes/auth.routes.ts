
import { Router, Request, Response } from 'express';

const AuthRoute = Router();

AuthRoute.post('/authenticate', (request: Request, response: Response)=>{
    response.send('Teste');
});


export default AuthRoute;
