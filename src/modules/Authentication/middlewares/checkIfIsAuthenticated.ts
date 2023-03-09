import { Request, Response, NextFunction } from 'express';
import * as jose from 'jose';
import envConfig from '../../common/envConfig';

export default function checkIfIsAuthenticated(request: Request, response: Response, nextFunction: NextFunction): void {
	const secret = new TextEncoder().encode(envConfig.TOKEN_SECRET);
	const jwToken = request.headers.authorization;
	
	if (!jwToken) {
		response.status(401).json({ message: 'Invalid token' });
	}
	
	jose.jwtVerify(jwToken!, secret)
		.then(() => {
			nextFunction()
		}).catch(() => response.status(401).json({ message: 'Invalid token' }));
}
