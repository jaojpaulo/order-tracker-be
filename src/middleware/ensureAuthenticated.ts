import { Request, Response, NextFunction } from 'express';
import * as jose from 'jose';

export default function checkIfIsAuthenticated(request: Request, response: Response, nextFunciton: NextFunction): void {
	const secret = new TextEncoder().encode(
		'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
	  );

	const jwToken = request.headers.authorization;
	
	if (!jwToken) {
		response.status(401).json({ message: 'Invalid token' });
	}
	
	jose.jwtVerify(jwToken!, secret)
		.then((value) => {
			console.log(value);
			nextFunciton()
		}).catch(() => response.status(401).json({ message: 'Invalid token' }));
}
