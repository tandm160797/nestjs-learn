import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport, type MicroserviceOptions } from '@nestjs/microservices';

import AppModule from 'AppModule';

const bootstrap = async () => {
	// Config env
	const configService = new ConfigService();
	const authServiceRabbitmqURL = configService.get('AUTH_SERVICE_RABBITMQ_URL');

	const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
		transport: Transport.RMQ,
		options: {
			urls: [authServiceRabbitmqURL],
			queue: 'auth_queue',
			queueOptions: {
				durable: false,
			},
		},
	});

	await app.listen();
};

void bootstrap();
