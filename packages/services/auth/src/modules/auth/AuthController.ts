import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Request } from 'express';

import AuthService from '@modules/auth/AuthService';
// import JWTAuthGuard from '@modules/auth/JWTAuthGuard';
import LocalAuthGuard from '@modules/auth/LocalAuthGuard';

@Controller('auth')
class AuthController {
	constructor(private readonly authService: AuthService) {}

	@MessagePattern('/login')
	@UseGuards(LocalAuthGuard)
	@Post('/login')
	async login(@Req() req: Request) {
		return this.authService.login(req.user);
	}

	@MessagePattern({
		cmd: '/abc',
	})
	// @UseGuards(JWTAuthGuard)
	@Get('/')
	list(req: Request) {
		return [];
	}
}

export default AuthController;
