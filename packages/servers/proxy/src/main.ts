import { NestFactory } from '@nestjs/core';

import 'dotenv/config';

import AppModule from 'AppModule';

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);
	await app.listen(process.env.PROXY_PORT);
};

void bootstrap();
