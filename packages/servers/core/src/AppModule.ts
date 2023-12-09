import { Module } from '@nestjs/common';
import ExampleModule from 'modules/example/ExampleModule';
import TenantModule from 'modules/tenant/TenantModule';

import UserModule from 'modules/users/UserModule';

@Module({
	imports: [TenantModule, UserModule, ExampleModule],
})
class AppModule {}

export default AppModule;
