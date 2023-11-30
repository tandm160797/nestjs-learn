import { Module, type MiddlewareConsumer, type NestModule } from '@nestjs/common';

import AppController from 'AppController';
import AppService from 'AppService';
import ProxyMiddleware from 'middlewares/ProxyMiddleware';

@Module({
	controllers: [AppController],
	providers: [AppService],
})
class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ProxyMiddleware).forRoutes('*');
	}
}

export default AppModule;
