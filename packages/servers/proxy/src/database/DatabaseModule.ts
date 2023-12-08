import { Module, type DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({})
class DatabaseModule {
	static forRoot(uri: string): DynamicModule {
		const connection = MongooseModule.forRoot(uri);

		return {
			module: DatabaseModule,
			imports: [connection],
		};
	}
}

export default DatabaseModule;
