import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import Example from 'Example';
import ExampleController from 'ExampleController';
import ExampleService from 'ExampleService';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Example.name,
				schema: Example.getSchema(),
			},
		]),
	],
	controllers: [ExampleController],
	providers: [ExampleService],
})
class ExampleModule {}

export default ExampleModule;
