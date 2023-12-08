import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import ExampleController from 'ExampleController';
import ExampleSchema, { Example } from 'ExampleSchema';
import { ExampleService } from 'ExampleService';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Example.name,
				schema: ExampleSchema,
			},
		]),
	],
	controllers: [ExampleController],
	providers: [ExampleService, Example],
})
class ExampleModule {}

export default ExampleModule;
