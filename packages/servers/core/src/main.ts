import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { configDotenv } from 'dotenv';

import AppModule from 'AppModule';

const bootstrap = async () => {
	configDotenv();

	const app = await NestFactory.create(AppModule);
	const options = new DocumentBuilder()
		.setTitle('Core API docs')
		.addTag('users')
		.addTag('tasks')
		.setVersion('1.0.0')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('document', app, document);
	await app.listen(3001);
};

void bootstrap();
