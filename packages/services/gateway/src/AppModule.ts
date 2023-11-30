import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import AppController from 'AppController';
import AppService from 'AppService';
import UserController from 'controllers/UserController';
import ConfigService from 'services/ConfigService';

@Module({
	imports: [ClientsModule.register([new ConfigService().get('USER_SERVICE')])],
	controllers: [AppController, UserController],
	providers: [AppService],
})
class AppModule {}

export default AppModule;
