import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import Example from '@modules/example/Example';
import ExampleController from '@modules/example/ExampleController';
import ExampleRepository from '@modules/example/ExampleRepository';
import ExampleService from '@modules/example/ExampleService';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Example.name,
				schema: Example.schema,
			},
		]),
	],
	controllers: [ExampleController],
	providers: [ExampleService, ExampleRepository],
})
class ExampleModule {}

export default ExampleModule;
