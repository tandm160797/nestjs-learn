import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { ClientProxy } from '@nestjs/microservices';
import { type Request } from 'express';
import { lastValueFrom } from 'rxjs';

@Injectable()
class AuthService {
	constructor(
		@Inject(REQUEST) private readonly request: Request,
		@Inject('AUTH_SERVICE') private readonly authServiceClient: ClientProxy,
	) {}

	async list(request: Request) {
		return await lastValueFrom(
			this.authServiceClient.send(
				{
					cmd: '/abc',
				},
				{},
			),
		);
	}
}

export default AuthService;
