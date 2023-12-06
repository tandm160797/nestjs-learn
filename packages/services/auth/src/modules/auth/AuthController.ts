import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import AuthService from 'modules/auth/AuthService';
import JWTAuthGuard from 'modules/auth/JWTAuthGuard';
import LocalAuthGuard from 'modules/auth/LocalAuthGuard';

@Controller('auth')
class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('/login')
	async login(@Req() req: Request) {
		return this.authService.login(req.user);
	}

	@UseGuards(JWTAuthGuard)
	@Get('/')
	list(@Req() req: Request) {
		return req.user;
	}
}

export default AuthController;
