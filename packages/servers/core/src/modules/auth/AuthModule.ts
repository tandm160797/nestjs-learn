import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

import AuthController from '@modules/auth/AuthController';
import AuthService from '@modules/auth/AuthService';

@Module({
	imports: [
		ClientsModule.registerAsync([
			{
				name: 'AUTH_SERVICE',
				inject: [ConfigService],
				useFactory: (configService: ConfigService) => {
					return {
						transport: Transport.RMQ,
						options: {
							urls: [configService.get<string>('AUTH_SERVICE_RABBITMQ_URL')],
							queue: 'auth_queue',
							queueOptions: {
								durable: false,
							},
						},
					};
				},
			},
		]),
	],
	controllers: [AuthController],
	providers: [AuthService],
	exports: [AuthService],
})
class AuthModule {}

export default AuthModule;
