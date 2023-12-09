import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import TenantService from './TenantService';

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
