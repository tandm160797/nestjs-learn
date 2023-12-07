import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
class JWTStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'jwtsecretkey',
		});
	}

	async validate(payload: any) {
		const { sub, name, role } = payload;

		return {
			id: sub,
			name,
			role,
		};
	}
}

export default JWTStrategy;
