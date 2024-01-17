import { Controller, Get } from '@nestjs/common';

import AuthService from '@modules/auth/AuthService';

@Controller('auth')
class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('/')
	async list() {
		return this.authService.list();
	}
}

export default AuthController;
