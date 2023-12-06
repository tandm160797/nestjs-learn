import { Module, type MiddlewareConsumer, type NestModule } from '@nestjs/common';

import ProxyMiddleware from 'middlewares/ProxyMiddleware';

@Module({})
class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ProxyMiddleware).forRoutes('*');
	}
}

export default AppModule;
