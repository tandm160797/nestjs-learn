import UserController from '@modules/users/UserController';
import UserService from '@modules/users/UserService';
import { Module } from '@nestjs/common';

@Module({
	controllers: [UserController],
	providers: [UserService],
})
class UserModule {}

export default UserModule;
