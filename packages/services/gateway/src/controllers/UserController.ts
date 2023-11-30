import { Controller, Get, Inject } from '@nestjs/common';
import { type ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('users')
class UserController {
	constructor(@Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy) {}

	@Get()
	public async getUserByToken() {
		const userResponse = await firstValueFrom(
			this.userServiceClient.send(
				{
					cmd: 'getHello',
				},
				{},
			),
		);

		return userResponse;
	}
}

export default UserController;
