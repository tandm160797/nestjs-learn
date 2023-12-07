import { Module, type MiddlewareConsumer, type NestModule } from '@nestjs/common';
import ExampleModule from 'ExampleModule';
import { MongooseModule } from '@nestjs/mongoose';

import ProxyMiddleware from 'middlewares/ProxyMiddleware';

@Module({
	imports: [MongooseModule.forRoot(process.env.DEFAULT_MONGODB_URI), ExampleModule],
})
class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ProxyMiddleware).forRoutes('*');
	}
}

export default AppModule;
