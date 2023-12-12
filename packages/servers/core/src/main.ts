import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import 'dotenv/config';

import AppModule from 'AppModule';

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);

	// Settup Swagger
	const swaggerDocumentOptions = new DocumentBuilder()
		.setTitle('Core API docs')
		.addTag('users')
		.addTag('tasks')
		.setVersion('1.0.0')
		.build();
	const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);
	SwaggerModule.setup('document', app, document);

	await app.listen(process.env.CORE_PORT);
};

void bootstrap();
