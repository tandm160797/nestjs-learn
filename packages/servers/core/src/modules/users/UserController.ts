import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import UserService, { CreateUserDTO } from 'modules/users/UserService';

@Controller('users')
class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	list(): any {
		console.log(1);

		return this.userService.list();
	}

	@Get(':id')
	detail(@Param('id') id: any): string {
		return 'detail';
	}

	@Post()
	create(@Body() createUserDTO: any): CreateUserDTO {
		return this.userService.create(createUserDTO);
	}

	@Post(':id')
	update(@Param('id') id: any, @Body() updateUserDTO: any): string {
		return 'update';
	}

	@Patch(':id')
	delete(@Param(':id') id: any): string {
		return 'delete';
	}
}

export default UserController;
