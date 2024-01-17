import { getTenantHeaders } from '@biso24/utils';
import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { ClientProxy, RmqRecordBuilder } from '@nestjs/microservices';
import { type Request } from 'express';
import { lastValueFrom } from 'rxjs';

@Injectable()
class AuthService {
	constructor(
		@Inject(REQUEST) private readonly request: Request,
		@Inject('AUTH_SERVICE') private readonly authServiceClient: ClientProxy,
	) {}

	async list() {
		try {
			const record = new RmqRecordBuilder().setOptions(getTenantHeaders(this.request));

			return await lastValueFrom(
				this.authServiceClient.send(
					{
						cmd: '/abc',
					},
					record,
				),
			);
		} catch (error) {
			console.log(error);

			return error;
		}
	}
}

export default AuthService;
