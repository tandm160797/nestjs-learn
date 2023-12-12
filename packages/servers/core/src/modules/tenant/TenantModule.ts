import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import TenantService from 'modules/tenant/TenantService';

@Module({
	imports: [
		MongooseModule.forRootAsync({
			imports: [TenantModule],
			useExisting: TenantService,
		}),
	],
	providers: [TenantService],
	exports: [TenantService],
})
class TenantModule {}

export default TenantModule;
