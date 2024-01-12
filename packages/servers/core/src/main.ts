import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import AppModule from 'AppModule';

const bootstrap = async () => {
	// Config env
	const configService = new ConfigService();
	const port = configService.get('PORT');

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

	await app.listen(port);
};

void bootstrap();
