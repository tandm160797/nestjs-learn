import { Module } from '@nestjs/common';

import AppController from 'AppController';
import AppService from 'AppService';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService]
})
class AppModule {}

export default AppModule;
