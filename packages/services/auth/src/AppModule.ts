import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TenantModule } from '@biso24/tenant';

import AuthModule from '@modules/auth/AuthModule';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.env.${process.env.NODE_ENV}`,
			isGlobal: true,
		}),
		TenantModule,
		AuthModule,
	],
})
class AppModule {}

export default AppModule;
