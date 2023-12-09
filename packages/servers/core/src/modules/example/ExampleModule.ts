import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import ExampleController from 'modules/example/ExampleController';
import ExampleSchema, { Example } from 'modules/example/ExampleSchema';
import ExampleService from 'modules/example/ExampleService';

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
	providers: [ExampleService],
})
class ExampleModule {}

export default ExampleModule;
