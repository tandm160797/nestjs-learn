import { Module } from '@nestjs/common';

import UserService from '@modules/users/UserService';

@Module({
	providers: [UserService],
	exports: [UserService],
})
class UserModule {}

export default UserModule;
