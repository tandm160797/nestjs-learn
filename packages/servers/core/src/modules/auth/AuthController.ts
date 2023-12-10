import { Controller, Get, Inject, Post, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';
import { stringify } from 'flatted';

@Controller('auth')
class AuthController {
	constructor(@Inject('AUTH_SERVICE') private readonly authServiceClient: ClientProxy) {}

	// @UseGuards(LocalAuthGuard)
	@Post('/login')
	async login(@Req() req: Request) {
		return [];
	}

	@Get('/')
	async list(@Req() req: Request) {
		try {
			// const data = await lastValueFrom(
			// 	this.authServiceClient.send(
			// 		{
			// 			cmd: '/',
			// 		},
			// 		req,
			// 	),
			// );
			console.log(this.authServiceClient);

			const data = this.authServiceClient.send(
				{
					cmd: '/',
				},
				req,
			);
			console.log('Request data ' + stringify(data));
		} catch (error) {
			console.error('Error:', error);
		}
	}
}

export default AuthController;
