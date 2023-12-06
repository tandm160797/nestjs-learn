import { Injectable } from '@nestjs/common';

@Injectable()
class UserService {
	private readonly users = [
		{
			id: 1,
			email: 'admin',
			password: '123456',
		},
		{
			id: 2,
			email: 'admin2',
			password: '123456',
		},
	];

	async findOne(email: string) {
		return this.users.find((user) => {
			return user.email === email;
		});
	}
}

export default UserService;
