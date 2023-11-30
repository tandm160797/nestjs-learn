import { Module } from '@nestjs/common';

import AppController from 'AppController';
import AppService from 'AppService';
import UserModule from 'modules/users/UserModule';

@Module({
	imports: [UserModule],
	controllers: [AppController],
	providers: [AppService],
})
class AppModule {}

export default AppModule;
