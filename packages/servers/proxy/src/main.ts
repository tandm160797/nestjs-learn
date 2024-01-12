import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import AppModule from 'AppModule';

const bootstrap = async () => {
	// Config env
	const configService = new ConfigService();
	const port = configService.get('PROXY_PORT');

	const app = await NestFactory.create(AppModule);
	await app.listen(port);
};

void bootstrap();
