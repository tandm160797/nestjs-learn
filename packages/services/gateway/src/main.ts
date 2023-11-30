import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { configDotenv } from 'dotenv';

import AppModule from 'AppModule';
import ConfigService from 'services/ConfigService';

const bootstrap = async () => {
	configDotenv();

	const app = await NestFactory.create(AppModule);
	const options = new DocumentBuilder()
		.setTitle('API docs')
		.addTag('users')
		.addTag('tasks')
		.setVersion('1.0.0')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('document', app, document);
	await app.listen(new ConfigService().get('PORT'));
};

void bootstrap();
