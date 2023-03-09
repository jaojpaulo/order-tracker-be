import { Router, Request, Response } from 'express';
import GenerateTokenService from '../services/GenerateTokenService';

const AuthRoute = Router();

AuthRoute.post('/authenticate', (request: Request, response: Response) => {
	GenerateTokenService.generate(request, response);
});

export default AuthRoute;
