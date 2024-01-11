import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import TenantModule from '@biso24/tenant';
import AuthModule from '@modules/auth/AuthModule';
import ExampleModule from '@modules/example/ExampleModule';
// import TenantModule from '@modules/tenant/TenantModule';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.env.${process.env.NODE_ENV}`,
		}),
		TenantModule,
		AuthModule,
		ExampleModule,
	],
})
class AppModule {}

export default AppModule;
