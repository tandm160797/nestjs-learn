import { Module } from '@nestjs/common';

import UserModule from 'modules/users/UserModule';

@Module({
	imports: [UserModule],
})
class AppModule {}

export default AppModule;
