import { Module } from '@nestjs/common';

import AuthModule from 'modules/auth/AuthModule';

@Module({
	imports: [AuthModule],
})
class AppModule {}

export default AppModule;
