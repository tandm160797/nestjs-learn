import { NestFactory } from '@nestjs/core';
import { Transport, type MicroserviceOptions } from '@nestjs/microservices';

import 'dotenv/config';

import AppModule from 'AppModule';

const bootstrap = async () => {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
		transport: Transport.RMQ,
		options: {
			urls: [process.env.AUTH_SERVICE_RABBITMQ_URL],
			queue: 'auth_queue',
			queueOptions: {
				durable: false,
			},
		},
	});

	await app.listen();
};

void bootstrap();
