import { Module } from '@nestjs/common';
import UserController from 'modules/users/UserController';
import UserService from 'modules/users/UserService';

@Module({
	controllers: [UserController],
	providers: [UserService],
})
class UserModule {}

export default UserModule;
