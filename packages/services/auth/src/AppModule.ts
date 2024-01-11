import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import AuthModule from '@modules/auth/AuthModule';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.env.${process.env.NODE_ENV}`,
		}),
		AuthModule,
	],
})
class AppModule {}

export default AppModule;
