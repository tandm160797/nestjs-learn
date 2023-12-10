import { Module } from '@nestjs/common';

import AuthModule from 'modules/auth/AuthModule';
import ExampleModule from 'modules/example/ExampleModule';
import TenantModule from 'modules/tenant/TenantModule';

@Module({
	imports: [TenantModule, AuthModule, ExampleModule],
})
class AppModule {}

export default AppModule;
