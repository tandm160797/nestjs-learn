import { Controller, Get } from '@nestjs/common';

import ExampleService from 'ExampleService';

@Controller()
class ExampleController {
	constructor(private readonly exampleService: ExampleService) {}

	@Get('example')
	async list() {
		return this.exampleService.list();
	}
}

export default ExampleController;
