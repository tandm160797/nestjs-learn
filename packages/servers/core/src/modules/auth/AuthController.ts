import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

import AuthService from '@modules/auth/AuthService';

@Controller('auth')
class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('/')
	async list(@Req() req: Request) {
		return this.authService.list(req);
	}
}

export default AuthController;
