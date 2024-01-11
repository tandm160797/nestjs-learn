import { Module, type MiddlewareConsumer, type NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import ProxyMiddleware from '@middlewares/ProxyMiddleware';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.env.${process.env.NODE_ENV}`,
		}),
	],
})
class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ProxyMiddleware).forRoutes('*');
	}
}

export default AppModule;
