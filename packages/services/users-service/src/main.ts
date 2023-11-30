import { NestFactory } from '@nestjs/core';
import { type MicroserviceOptions } from '@nestjs/microservices';

import { ConfigService } from '@biso24/services';

import AppModule from 'AppModule';

const bootstrap = async () => {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		AppModule,
		new ConfigService().get('USER_SERVICE'),
	);
	await app.listen();
};

void bootstrap();
