import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import UserService from '@modules/users/UserService';

@Injectable()
class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
	) {}

	public async validateUser(email: string, password: string) {
		const user = await this.userService.findOne(email);

		if (user && user.password === password) {
			const { password, ...restUser } = user;
			return restUser;
		}
		return null;
	}

	public async login(user: any) {
		const { id, name, role } = user;
		const payload = {
			sub: id,
			name,
			role,
		};

		return {
			accessToken: this.jwtService.sign(payload),
		};
	}
}

export default AuthService;
