import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import AuthController from 'modules/auth/AuthController';
import AuthService from 'modules/auth/AuthService';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'AUTH_SERVICE',
				transport: Transport.RMQ,
				options: {
					urls: [process.env.AUTH_SERVICE_RABBITMQ_URL],
					queue: 'auth_queue',
					queueOptions: {
						durable: false,
					},
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
