import { NestFactory } from '@nestjs/core';
import { configDotenv } from 'dotenv';

import AppModule from 'AppModule';

const bootstrap = async () => {
	configDotenv();

	const app = await NestFactory.create(AppModule);
	await app.listen(2999);
};

void bootstrap();
