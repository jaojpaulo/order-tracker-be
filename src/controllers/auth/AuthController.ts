import * as jose from 'jose';
import envConfig from '../../common/envConfig';

export async function generateToken(user: string, password: string) {
	console.log(envConfig.TOKEN_SECRET)
	const secret = new TextEncoder().encode(envConfig.TOKEN_SECRET);
	const jwt = await new jose.SignJWT({user, password})
	.setProtectedHeader({ alg: envConfig.ALG! })
	.setExpirationTime('1h')
	.sign(secret);

	return jwt;
}
