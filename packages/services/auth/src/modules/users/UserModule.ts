import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import UserSchema, { User } from '@modules/users/UserSchema';
import UserService from '@modules/users/UserService';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: User.name,
				schema: UserSchema,
			},
		]),
	],
	controllers: [],
	providers: [UserService],
	exports: [UserService],
})
class UserModule {}

export default UserModule;
