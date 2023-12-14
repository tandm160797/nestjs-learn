import { Module } from '@nestjs/common';

import AuthModule from 'modules/auth/AuthModule';
import UserModule from 'modules/users/UserModule';

@Module({
	imports: [AuthModule, UserModule],
})
class AppModule {}

export default AppModule;
