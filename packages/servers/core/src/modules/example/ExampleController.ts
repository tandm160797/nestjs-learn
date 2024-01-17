import { Controller, Get } from '@nestjs/common';

import ExampleService from '@modules/example/ExampleService';

@Controller('example')
class ExampleController {
	constructor(private readonly exampleService: ExampleService) {}

	@Get('/')
	async list() {
		return this.exampleService.list();
	}
}

export default ExampleController;
