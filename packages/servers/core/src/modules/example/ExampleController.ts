import { Controller, Get } from '@nestjs/common';

import ExampleService from '@modules/example/ExampleService';

@Controller()
class ExampleController {
	constructor(private readonly exampleService: ExampleService) {}

	@Get('example')
	async list() {
		return this.exampleService.list();
	}
}

export default ExampleController;
