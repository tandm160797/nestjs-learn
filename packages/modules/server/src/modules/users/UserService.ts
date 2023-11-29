import { Injectable } from '@nestjs/common';
import APIResponse from '@shared/APIResponse';

export class CreateUserDTO {
	name: string;

	constructor(name: string) {
		this.name = name;
		return this;
	}
}

@Injectable()
class UserService {
	private readonly users: any[] = [];

	list(): any {
		return new APIResponse([], 200, 'OK');
	}

	detail(id: any): string {
		return 'detail';
	}

	create(createUserDTO: any): CreateUserDTO {
		console.log(createUserDTO);

		const userDTO = new CreateUserDTO(createUserDTO.name);

		this.users.push(userDTO);

		console.log(this.users);

		return userDTO;
	}

	update(id: any, updateUserDTO: any): string {
		return 'update';
	}

	delete(id: any): string {
		return 'delete';
	}
}

export default UserService;