import { Request, Response } from 'express';
import * as jose from 'jose';
import envConfig from '../../common/envConfig';

export default class GenerateTokenService {

	public static generate(request: Request, response: Response) {
		this.generateToken(request.body.user, request.body.password)
		.then((token: string) => { response.json({ token }); });
	}

	private static async generateToken(user: string, password: string){
		const secret = new TextEncoder().encode(envConfig.TOKEN_SECRET);
		const jwt = await new jose.SignJWT({user, password})
		.setProtectedHeader({ alg: envConfig.ALG! })
		.setExpirationTime('1h')
		.sign(secret);
	
		return jwt;
	}	
}
