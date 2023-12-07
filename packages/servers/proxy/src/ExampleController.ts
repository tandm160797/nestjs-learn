// example.service.ts

import { Controller, Get, Req } from '@nestjs/common';
import { ExampleService } from 'ExampleService';
import { RequestWithConection } from 'middlewares/ProxyMiddleware';

@Controller()
class ExampleController {
	constructor(private readonly exampleService: ExampleService) {}

	@Get('example')
	async list(@Req() req: RequestWithConection) {
		return this.exampleService.list(req);
	}
}

export default ExampleController;
