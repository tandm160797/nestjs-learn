import { Module, type MiddlewareConsumer, type NestModule } from '@nestjs/common';

import { AuthModule } from '@biso24/middlewares';
import ProxyMiddleware from 'middlewares/ProxyMiddleware';

@Module({
	imports: [AuthModule],
})
class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ProxyMiddleware).forRoutes('*');
	}
}

export default AppModule;
