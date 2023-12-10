import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import AuthController from 'modules/auth/AuthController';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'AUTH_SERVICE',
				transport: Transport.RMQ,
				options: {
					urls: [process.env.AUTH_SERVICE_RABBITMQ_URL],
					queue: 'auth-service',
					queueOptions: {
						durable: false,
					},
				},
			},
		]),
	],
	controllers: [AuthController],
})
class AuthModule {}

export default AuthModule;
