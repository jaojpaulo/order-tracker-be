
import { Router, Request, Response } from 'express';
import { generateToken } from '../controllers/auth/AuthController';


const AuthRoute = Router();

AuthRoute.post('/authenticate', (request: Request, response: Response) => {
	generateToken(request.body.user, request.body.password)
	.then((token: string) => {
		response.json({ token });
	});
});


export default AuthRoute;
