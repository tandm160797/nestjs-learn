import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, type UserDocument } from '@modules/users/UserSchema';

@Injectable()
class UserService {
	constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

	async list() {
		return await this.userModel.find();
	}

	async validateUser(email: string) {
		return await this.userModel.findOne({
			email,
		});
	}
}

export default UserService;
